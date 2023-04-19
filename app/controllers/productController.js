import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/productQueries.js';

export default {
  async getAllAdmin(req, res, next) {
    const data = await query.getAllAdmin();
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getAllShop(req, res, next) {
    const data = await query.getAllShop();
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getOneAdmin(req, res, next) {
    const data = await query.getOneAdmin(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getOneShop(req, res, next) {
    const data = await query.getOneShop(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async createOne(req, res) {
    const data = await query.createOne(req.body);
    console.log(data);
    res.status(201).send({ data });
  },

  async updateOnePatch(req, res, next) {
    const data = await query.getOneAdmin(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    await query.updateOne(data, req.body);
    res.status(201).send({ data });
  },

  async updateOnePut(req, res) {
    const data = await query.getOneAdmin(req.params.id);
    console.log(req.body);
    if (!data) {
      const data = await query.createOne(req.body);
      res.status(201).send({ data });
    } else {
      await query.updateOne(data, req.body);
      res.status(201).send({ data });
    }
  },

  async deleteOne(req, res, next) {
    const data = await query.getOne(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    await query.deleteOne(data);
    res.status(204).end();
  },
};
