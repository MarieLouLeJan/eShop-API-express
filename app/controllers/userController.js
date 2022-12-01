import bcrypt from 'bcrypt';
import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/userQueries.js';
import jwt from 'jsonwebtoken';
import UnauthorizedError from '../helpers/UnauthorizedError.js';


export default {

    async getAll (_, res, next) {
        const allUsers = await query.getAll();
        if(allUsers.length === 0) next(new NotFoundError('Data was not found'))
        const users = allUsers.map(user => user.get({ plain: true }));
        for(let user of users) for(const i in user) if(i === "password") delete (user[i]);
        res.status(200).send({ users });
    },

    async getOne(req, res, next){
        const userFound = await query.getOne(req.params.id);
        if(!userFound) next(new NotFoundError('Data was not found'));
        const user = userFound.get({ plain: true })
        for(const i in user) if(i === "password") delete user[i];
        res.status(200).send({ user });
    },

    async login(req, res, next){
        const users = await query.getAll();
        if(users.length === 0) next(new NotFoundError('Data was not found'));
        const userFound = users.find(user => user.email == req.body.email);
        if(!userFound) return res.status(401).send({message: 'wrong password or email'});
        const passwordOk = await bcrypt.compare(req.body.password, userFound.password);
        if(!passwordOk ) return res.status(401).send({message :'wrong password or email'});
        const user = userFound.get({ plain: true });
        const token = jwt.sign({ user }, process.env.SALT )
        res.status(200).send({ token, user });
    },

    async createOne(req, res){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const newUser1 = await query.createOne(req.body);
        const newUser = newUser1.get({ plain: true });
        for(const i in newUser) if(i === "password") delete newUser[i];
        res.status(201).send({ newUser });
    },

    async updateOnePatch(req, res, next){
        const id = req.params.id;
        if(req.token.user.id !== id && req.token.user.roles.title !== 'admin') {
            next(new UnauthorizedError(`You don't have the permission to access`))
        }
        const userToUpdate = await query.getOne(id);
        if(!userToUpdate) next(new NotFoundError('Data was not found'))
        await query.updateOne(user, req.body)
        const user = userToUpdate.get({ plain: true })
        for(const i in user) if(i === "password") delete user[i];        
        res.status(201).send({ user });
    },

    async updateOnePut(req, res){
        const user = await query.getOne(req.params.id);
        if(!user) {
            const newUser = await query.createOne(req.body);
            res.status(201).send({ newUser });
        } else {
            const us = user.get({plain: true})
            for(const i in us) if(i !== "created_at" && i !== 'id' ) delete (us[i]); 
            const user = Object.assign({}, us, req.body)
            await query.updateOne(user, user);
            res.status(201).send({ user });
        }
    },

    async deleteOne(req, res, next){
        const user = await query.getOne(req.params.id);
        if(!user) next(new NotFoundError('user was not found'))
        await query.deleteOne(user);
        res.status(204).end();
    }
}