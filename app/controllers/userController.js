import { User } from '../database/models/index.js';
import bcrypt from 'bcrypt';


export default {

    async getAll (req, res) {
        const users = await User.findAll();
        res.status(200).send({ users });
    },

    async getOne(req, res){
        const user = await User.findByPk(req.params.id);
        res.status(200).send({ user });
    },

    async login(req, res){
        const users = await User.findAll();
        const user = users.find(user => user.email == req.body.email)
        if(!user) return res.status(400).send('Cannot find user'); 
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

    async updateOne(req, res){
        const user = await User.findByPk(req.params.id);
        if(!user) return res.status(200).send('userNotFound');
        await user.update(req.body)
        res.status(201).send({ user });
    },
}