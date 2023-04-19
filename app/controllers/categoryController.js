import query from '../services/queries/categoryQueries.js';
import NotFoundError from '../helpers/NotFoundError.js';

export default {
  async getAllAdmin(_, res, next) {
    const data = await query.getAllAdmin();
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getAllShop(_, res, next) {
    const data = await query.getAllShop();
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getOneShop(req, res, next) {
    const categoryArr = await query.getOneShop(req.params.id);
    categoryArr.length === 0 && next(new NotFoundError('Non existent data'));
    const data = categoryArr[0];
    res.status(200).json({ data });
  },

  async getOneAdmin(req, res, next) {
    const data = await query.getOneAdmin(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    res.status(200).json({ data });
  },

  async createOne(req, res) {
    const data = await query.createOne(req.body);
    res.status(201).send({ data });
  },

  async updateOnePatch(req, res, next) {
    const data = await query.getOne(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    await query.updateOne(data, req.body);
    res.status(201).send({ data });
  },

  async updateOnePut(req, res) {
    let data = await query.getOne(req.params.id);
    if (!data) {
      data = query.createOne(req.body);
      res.status(201).send({ data });
    } else {
      await query.updateOne(data, req.body);
      res.status(201).send({ data });
    }
  },

  async deleteOne(req, res, next) {
    const data = await query.getOne(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    await query.deleteOne();
    res.status(204).end();
  },
};
