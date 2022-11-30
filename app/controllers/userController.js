import { User } from '../database/models/index.js';
import bcrypt from 'bcrypt';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const allUsers = await User.findAll({
            include: ['roles', 'adresses']
        });
        if(allUsers.length === 0) next(new NotFoundError('Data was not found'))
        const users = allUsers.map(user => user.get({ plain: true }));
        for(let user of users) for(const i in user) if(i === "password") delete (user[i]);
        res.status(200).send({ users });
    },

    async getOne(req, res, next){
        const userFound = await User.findByPk(req.params.id, {
            include: ['roles', 'adresses']
        });
        if(!userFound) next(new NotFoundError('Data was not found'));
        const user = userFound.get({ plain: true })
        for(const i in user) if(i === "password") delete user[i];
        res.status(200).send({ user });
    },

    async login(req, res, next){
        const users = await User.findAll();
        if(users.length === 0) next(new NotFoundError('Data was not found'))
        const userFound = users.find(user => user.email == req.body.email)
        if(!userFound) next(new NotFoundError('Data was not found'))
        const passwordOk = await bcrypt.compare(req.body.password, userFound.password);
        if(!passwordOk) return res.status(200).send('Wrong password');
        const user = userFound.get({ plain: true })
        for(const i in user) if(i === "password") delete user[i];
        res.status(200).send({ user })
    },

    async createOne(req, res){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const newUser1 = await User.create(req.body);
        const newUser = newUser1.get({ plain: true });
        for(const i in newUser) if(i === "password") delete newUser[i];
        res.status(201).send({ newUser });
    },

    async updateOnePatch(req, res, next){
        const userToUpdate = await User.findByPk(req.params.id);
        if(!userToUpdate) next(new NotFoundError('Data was not found'))
        await userToUpdate.update(req.body)
        const user = userToUpdate.get({ plain: true })
        for(const i in user) if(i === "password") delete user[i];        
        res.status(201).send({ user });
    },

    async updateOnePut(req, res){
        const user = await User.findByPk(req.params.id);
        if(!user) {
            const newUser = await User.create(req.body);
            res.status(201).send({ newUser });
        } else {
            const us = user.get({plain: true})
            for(const i in us) if(i !== "created_at" && i !== 'id' ) delete (us[i]); 
            const userToSave = Object.assign({}, us, req.body)
            await user.update(userToSave);
            res.status(201).send({ user });
        }
    },

    async deleteOne(req, res, next){
        const user = await User.findByPk(req.params.id);
        if(!user) next(new NotFoundError('user was not found'))
        await user.destroy();
        res.status(204).send();
    }
}