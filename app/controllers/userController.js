import { User } from '../database/models/index.js';
import bcrypt from 'bcrypt';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const users = await User.findAll({
            include: ['roles', 'adresses']
        });
        if(users.length === 0) next(new NotFoundError('Data was not found'))

        res.status(200).send({ users });
    },

    async getOne(req, res, next){
        const user = await User.findByPk(req.params.id, {
            include: ['roles', 'adresses']
        });
        if(!user) next(new NotFoundError('Data was not found'))
        res.status(200).send({ user });
    },

    async login(req, res, next){
        const users = await User.findAll();
        if(user.length === 0) next(new NotFoundError('Data was not found'))
        const user = users.find(user => user.email == req.body.email)
        if(!user) next(new NotFoundError('Data was not found'))
        const passwordOk = await bcrypt.compare(req.body.password, user.password);
        if(!passwordOk) return res.status(200).send('Wrong password');
        res.status(200).send({ user })
    },

    async createOne(req, res){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const newUser = await User.create(req.body)
        res.status(201).send({ newUser });
    },

    async updateOne(req, res, next){
        const user = await User.findByPk(req.params.id);
        if(!user) next(new NotFoundError('Data was not found'))
        await user.update(req.body)
        res.status(201).send({ user });
    },

    async deleteOne(req, res, next){
        const user = await User.findByPk(req.params.id);
        if(!user) next(new NotFoundError('user was not found'))
        await user.destroy();
        res.status(204).send();
    }
}