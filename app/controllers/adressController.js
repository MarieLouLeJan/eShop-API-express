import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/adressQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {
  async getAll(_, res, next) {
    const data = await query.getAll();
    data.length === 0 && next(new NotFoundError('data was not found'));
    res.status(200).send({ data });
  },

  async getOne(req, res, next) {
    const data = await query.getOne(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    if (
      data.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    res.status(200).json({ data });
  },

  async getByUser(req, res, next) {
    const data = await query.getByUser(req.params.id);
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).json({ data });
  },

  async createOne(req, res, next) {
    if (
      req.token.user.roles.title !== 'admin' &&
      req.token.user.id !== req.body.user_id
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    const data = await query.createOne(req.body);
    res.status(201).send({ data });
  },

  async updateOnePatch(req, res, next) {
    const data = await query.getOne(req.params.id);
    !data && next(new NotFoundError('Non existent data'));
    if (
      data.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    await query.updateOne(data, req.body);
    res.status(200).send({ data });
  },

  async updateOnePut(req, res, next) {
    if (
      req.body.user_id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    let data = await query.getOne(req.params.id);
    if (!data) {
      data = await query.createOne(req.body);
      res.status(201).send({ data });
    } else {
      await query.updateOne(data, req.body);
      res.status(200).send({ data });
    }
  },

  async deleteOne(req, res, next) {
    const data = await query.getOne(req.params.id);
    if (
      data.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    !data && next(new NotFoundError('Non existent data'));
    await query.deleteOne(data);
    res.status(204).end();
  },
};
