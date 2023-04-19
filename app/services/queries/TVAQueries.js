import { TVA } from '../../database/models/index.js';

export default {
  async getAll() {
    return await TVA.findAll();
  },

  async getOne(id) {
    return await TVA.findByPk(id);
  },

  async createOne(body) {
    return await TVA.create(body);
  },

  async updateOne(tva, body) {
    return await tva.update(body);
  },

  async deleteOne(tva) {
    await tva.destroy();
  },
};
