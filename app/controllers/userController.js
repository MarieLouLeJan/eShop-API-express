/* eslint-disable no-unused-vars */
import bcrypt from 'bcrypt';
import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/userQueries.js';
import jwt from 'jsonwebtoken';
import UnauthorizedError from '../helpers/UnauthorizedError.js';
import sendEmail from '../services/sendEmailFunction.js';
import { resetLinkToken, generateAccessToken } from '../services/generateToken.js'


const controller = {

    async getAll (_, res, next) {
        let users = await query.getAll();
        if(users.length === 0) next(new NotFoundError('Data was not found'))
        users = users.map(user => user.get({ plain: true }))
        for(let user of users) delete user.password
        res.status(200).send({ users });
    },

    async getOne(req, res, next){
        const userFound = await query.getOne(req.params.id);
        if(!userFound) next(new NotFoundError('Data was not found'));
        const {password, ...user} = userFound.get({ plain: true })
        res.status(200).send({ user });
    },

    async login(req, res, next){
        const users = await query.getAll();
        if(users.length === 0) next(new NotFoundError('Data was not found'));
        const userFound = users.find(user => user.email === req.body.email.toLowerCase());
        if(!userFound) return res.status(401).send({message: 'wrong password or email'});
        const passwordOk = await bcrypt.compare(req.body.password, userFound.password);
        if(!passwordOk ) return res.status(401).send({message :'wrong password or email'});
        const {password, ...user} = userFound.get({ plain: true });
        const token = generateAccessToken(user)
        res.status(200).send({ token, user });
    },

    async createOne(req, res){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        req.body.email = req.body.email.toLowerCase()
        const {password, ...newUser} = (await query.createOne(req.body)).get({ plain: true });
        res.status(201).send({ newUser });
    },

    async updateOnePatch(req, res, next){
        const id = req.params.id;
        if(req.token.user.id !== id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const userToUpdate = await query.getOne(id);
        if(!userToUpdate) next(new NotFoundError('Data was not found'))
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        const {password, ...user} = (await query.updateOne(userToUpdate, req.body)).get({ plain: true })
        res.status(201).send({ user });
    },

    async updateOnePut(req, res, next){
        const id = req.params.id
        if(req.token.user.id !== id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        let user = await query.getOne(id);
        if(!user) {
            await controller.createOne(req, res)
        } else {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
            const {password, ...user} = (await query.updateOne(user, req.body)).get({ plain: true })
            res.status(201).send({ user });
        }
    },

    async deleteOne(req, res, next){
        const user = await query.getOne(req.params.id);
        if(!user) next(new NotFoundError('user was not found'))
        await query.deleteOne(user);
        res.status(204).end();
    },

    async resetPassword(req, res, next){
        const { email } = req.body;
        const users = await query.getAll();
        const user = users.find(user => user.email === email)
        if(!user) next(new NotFoundError('Invalid email'))
        user.reset = resetLinkToken(user);
        await user.save();
        sendEmail(user, user.reset, 'Reset password requested');
        res.status(200).send({message: 'Check your email'})
    },

    async resetPasswordLink(req, res, next) {
        const resetLink = req.params.token;
        const newPassword = req.body.password;

        const users = await query.getAll();
        const user = users.find(user => user.reset === resetLink);
        if(!user) next(new NotFoundError('Something went wrong, please try again later'))
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(newPassword, salt);
        
        const updatedCredential = {
            password,
            resetLink: null
        }

        await query.updateOne(user, updatedCredential);
        res.status(200).send({message: 'Password Updated'})
    }
}

export default controller;