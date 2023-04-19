import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/orderTypeAdressQueries.js';
import orderquery from '../services/queries/orderQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {
  async getAll(req, res, next) {
    const data = await query.getAll();
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getByOrder(req, res, next) {
    const order = await orderquery.getOne(req.body.order_id);
    !order && next(new NotFoundError('Data was not found'));
    if (
      order.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError(`You don't have the permission to access`));
    const data = await query.getByOrder(req.params.id);
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send(data);
  },

  async createOne(req, res, next) {
    const order = await orderquery.getOne(req.body.order_id);
    !order && next(new NotFoundError('Data was not found'));
    if (
      order.users.id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError(`You don't have the permission to access`));
    const data = await query.createOne(req.body);
    res.status(201).send({ data });
  },

  async deleteOne(req, res, next) {
    const orderAdressTypeToDelete = await query.getOne(req.body);
    orderAdressTypeToDelete.length === 0 &&
      next(new NotFoundError('Non existent data'));
    for (const i of orderAdressTypeToDelete) {
      await query.deleteOne(i);
    }
    res.status(204).end();
  },
};
