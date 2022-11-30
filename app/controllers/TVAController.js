import { TVA } from '../database/models/index.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {

    async getAll (_, res, next) {
        const TVAs = await TVA.findAll();
        if(TVAs.length === 0) next(new NotFoundError('Non existent data'))
        res.status(200).send({ TVAs });
    },

    async getOne(req, res, next){
        const myTVA = await TVA.findByPk(req.params.id);
        if(!myTVA) next(new NotFoundError('Non existent data'))
        res.status(200).send({ myTVA });
    },

    async createOne(req, res){
        const newTVA = await TVA.create(req.body);
        res.status(201).send({ newTVA });
    },

    async updateOnePatch(req, res, next){
        const myTVA = await TVA.findByPk(req.params.id);
        if(!myTVA) next(new NotFoundError('Non existent data'))
        await myTVA.update(req.body)
        res.status(201).send({ myTVA });
    },

    async updateOnePut(req, res){
        const tva = await TVA.findByPk(req.params.id);
        if(!tva) {
            const newTVA = await TVA.create(req.body);
            res.status(201).send({ newTVA });
        } else {
            const T = tva.get({plain: true})
            for(const i in T) if(i !== "created_at" && i !== 'id' ) delete (T[i]); 
            const TVAToSave = Object.assign({}, T, req.body)
            await tva.update(TVAToSave);
            res.status(201).send({ tva });
        }
    },

    async deleteOne(req, res, next){
        const TVAtoDelete = await TVA.findByPk(req.params.id);
        if(!TVAtoDelete) next(new NotFoundError('Non existent data'))
        await TVAtoDelete.destroy();
        res.status(204).send();
    }

}