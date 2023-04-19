import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/orderProductQueries.js';
import orderquery from '../services/queries/orderQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {
  async getAll(req, res, next) {
    const data = await query.getAll();
    data.length === 0 && next(new NotFoundError('Data was not found'));
    res.status(200).send({ data });
  },

  async getAllByOrder(req, res, next) {
    const order = await orderquery.getOne(req.params.id);
    !order && next(new NotFoundError('Data was not found'));
    if (
      order.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    const data = await query.getByOrder(req.params.id);
    data.length === 0 && next(new NotFoundError('Data was not found'));
    res.status(200).send({ data });
  },

  async getOne(req, res, next) {
    const order = await orderquery.getOne(req.body.order_id);
    !order && next(new NotFoundError('Data was not found'));
    if (
      order.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    const orderProductFound = await query.getOne(req.body);
    orderProductFound.length === 0 &&
      next(new NotFoundError('Data was not found'));
    const data = orderProductFound[0];
    res.status(200).send({ data });
  },

  async updateOne(req, res, next) {
    const order = await orderquery.getOne(req.body.order_id);
    !order && next(new NotFoundError('Data was not found'));
    const orderProductFound = await query.getAll(req.body);
    orderProductFound.length === 0 &&
      next(new NotFoundError('Data was not found'));
    const data = orderProductFound[0];
    await query.updateOne(data, req.body);
    res.status(201).send({ data });
  },

  async createOne(req, res, next) {
    const order = await orderquery.getOne(req.body.order_id);
    !order && next(new NotFoundError('Data was not found'));
    if (
      order.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      new UnauthorizedError("You don't have the permission to access");
    const data = await query.createOne(req.body);
    res.status(201).send({ data });
  },

  async deleteOne(req, res, next) {
    const orderProductFound = await query.getOne(req.body);
    !orderProductFound && next(new NotFoundError('Data was not found'));
    const toDelete = orderProductFound[0];
    await query.deleteOne(toDelete);
    res.status(204).end();
  },
};
