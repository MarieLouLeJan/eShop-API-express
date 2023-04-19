import bcrypt from 'bcrypt';
import NotFoundError from '../helpers/NotFoundError.js';
import query from '../services/queries/userQueries.js';
import UnauthorizedError from '../helpers/UnauthorizedError.js';
import sendEmail from '../services/sendEmailFunction.js';
import {
  resetLinkToken,
  generateAccessToken,
} from '../services/generateToken.js';

const controller = {
  async getAll(_, res, next) {
    let users = await query.getAll();
    users.length === 0 && next(new NotFoundError('Data was not found'));
    users = users.map((user) => user.get({ plain: true }));
    users.forEach((user) => delete user.password);
    res.status(200).send({ data: users });
  },

  async getOne(req, res, next) {
    const userFound = await query.getOne(req.params.id);
    !userFound && next(new NotFoundError('Data was not found'));
    const { password, ...user } = userFound.get({ plain: true });
    res.status(200).send({ data: user });
  },

  async login(req, res, next) {
    const users = await query.getAll();
    users.length === 0 && next(new NotFoundError('Data was not found'));
    const userFound = users.find(
      (user) => user.email === req.body.email.toLowerCase()
    );
    if (!userFound)
      return res.status(401).send({ message: 'wrong password or email' });
    const passwordOk = await bcrypt.compare(
      req.body.password,
      userFound.password
    );
    if (!passwordOk)
      return res.status(401).send({ message: 'wrong password or email' });
    const { password, ...user } = userFound.get({ plain: true });
    const token = generateAccessToken(user);
    res.status(200).send({ token, data: user });
  },

  async createOne(req, res) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    req.body.email = req.body.email.toLowerCase();
    const { password, ...user } = (await query.createOne(req.body)).get({
      plain: true,
    });
    res.status(201).send({ data: user });
  },

  async updateOnePatch(req, res, next) {
    const { id } = req.params;
    if (req.token.user.id !== id && req.token.user.roles.title !== 'admin')
      next(new UnauthorizedError("You don't have the permission to access"));
    const userToUpdate = await query.getOne(id);
    !userToUpdate && next(new NotFoundError('Data was not found'));
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const { password, ...user } = (
      await query.updateOne(userToUpdate, req.body)
    ).get({ plain: true });
    res.status(201).send({ data: user });
  },

  async updateOnePut(req, res, next) {
    const { id } = req.params;
    if (req.token.user.id !== id && req.token.user.roles.title !== 'admin')
      next(new UnauthorizedError("You don't have the permission to access"));
    const userFound = await query.getOne(id);
    if (!userFound) {
      await this.createOne(req, res);
    } else {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      const { password, ...user } = (
        await query.updateOne(userFound, req.body)
      ).get({ plain: true });
      res.status(201).send({ data: user });
    }
  },

  async deleteOne(req, res, next) {
    const user = await query.getOne(req.params.id);
    !user && next(new NotFoundError('user was not found'));
    await query.deleteOne(user);
    res.status(204).end();
  },

  async resetPassword(req, res, next) {
    const { email } = req.body;
    const users = await query.getAll();
    const user = users.find((i) => i.email === email);
    !user && next(new NotFoundError('Invalid email'));
    user.reset = resetLinkToken(user);
    await user.save();
    sendEmail(user, user.reset, 'Reset password requested');
    res.status(200).send({ message: 'Check your email' });
  },

  async resetPasswordLink(req, res, next) {
    const { resetLink } = req.params;
    const { password } = req.body;

    const users = await query.getAll();
    const user = users.find((i) => i.reset === resetLink);
    !user &&
      next(new NotFoundError('Something went wrong, please try again later'));
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);

    const updatedCredential = {
      newPassword,
      resetLink: null,
    };
    await query.updateOne(user, updatedCredential);
    res.status(200).send({ message: 'Password Updated' });
  },
};

export default controller;
