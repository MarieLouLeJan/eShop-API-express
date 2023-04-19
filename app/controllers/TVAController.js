import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/TVAQueries.js';

export default {
  async getAll(_, res, next) {
    const TVAs = await query.getAll();
    TVAs.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data: TVAs });
  },

  async getOne(req, res, next) {
    const tva = await query.getOne(req.params.id);
    !tva && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data: tva });
  },

  async createOne(req, res) {
    const newTVA = await query.createOne(req.body);
    res.status(201).send({ data: newTVA });
  },

  async updateOnePatch(req, res, next) {
    const tva = await query.getOne(req.params.id);
    !tva && next(new NotFoundError('Non existent data'));
    await query.updateOne(tva, req.body);
    res.status(201).send({ data: tva });
  },

  async updateOnePut(req, res) {
    const tva = await query.getOne(req.params.id);
    if (!tva) {
      const newTVA = await query.createOne(req.body);
      res.status(201).send({ data: newTVA });
    } else {
      await query.updateOne(tva, req.body);
      res.status(201).send({ data: tva });
    }
  },

  async deleteOne(req, res, next) {
    const TVAtoDelete = await query.getOne(req.params.id);
    !TVAtoDelete && next(new NotFoundError('Non existent data'));
    await query.deleteOne(TVAtoDelete);
    res.status(204).end();
  },
};
