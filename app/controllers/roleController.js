import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/roleQueries.js';

export default {
  async getAll(_, res, next) {
    const roles = await query.getAll();
    roles.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data: roles });
  },

  async getOne(req, res, next) {
    const role = await query.getOne(req.params.id);
    !role && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data: role });
  },

  async createOne(req, res) {
    const newRole = await query.createOne(req.body);
    res.status(201).send({ data: newRole });
  },

  async updateOnePatch(req, res, next) {
    const role = await query.getOne(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    await query.update(role, req.body);
    res.status(201).send({ data: role });
  },

  async updateOnePut(req, res) {
    let role = await query.getOne(req.params.id);
    if (!role) {
      role = await query.createOne(req.body);
      res.status(201).send({ data: role });
    } else {
      await query.updateOne(role, req.body);
      res.status(201).send({ data: role });
    }
  },

  async deleteOne(req, res, next) {
    const role = await query.getOne(req.params.id);
    !role && next(new NotFoundError('Non existent data'));
    await query.deleteOne(role);
    res.status(204).end();
  },
};
