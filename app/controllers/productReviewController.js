import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/productReviewQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';

export default {
  async getAll(req, res, next) {
    const data = await query.getAll();
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getAllByProduct(req, res, next) {
    const data = await query.getAllByProduct(req.params.id);
    data.length === 0 && next(new NotFoundError('Non existent data'));
    res.status(200).send({ data });
  },

  async getOne(req, res, next) {
    const productReviews = await query.getOne(req.body);
    productReviews.length === 0 && next(new NotFoundError('Non existent data'));
    const data = productReviews[0];
    res.status(200).send({ data });
  },

  async updateOne(req, res, next) {
    const productReviews = await query.getOne(req.body);
    productReviews.length === 0 && next(new NotFoundError('Non existent data'));
    const data = productReviews[0];
    await query.update(data, req.body);
    res.status(201).send({ data });
  },

  async createOne(req, res, next) {
    if (
      req.body.user_id !== req.token.user.id &&
      req.token.user.roles.title !== 'admin'
    )
      next(new UnauthorizedError("You don't have the permission to access"));
    const data = await query.createOne(req.body);
    res.status(201).send({ data });
  },

  async deleteOne(req, res, next) {
    const productReviewToDelete = await query.getOne(req.body);
    productReviewToDelete.length === 0 &&
      next(new NotFoundError('Non existent data'));
    productReviewToDelete.forEach(async (i) => await query.deleteOne(i));
    res.status(204).end();
  },
};
