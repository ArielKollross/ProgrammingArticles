const knex = require('../database');

module.exports = {

  async index(request, response) {
    try {
      const results = await knex.raw(`SELECT * FROM users`);

      return response.json(results.rows);
    } catch (error) {
      next(error);
    } 
  },

  async create(request, response, next) {
    try {
    const { email, password } = request.body;

      const query = `INSERT INTO users (email, password) 
      VALUES ('${email}', '${password}') RETURNING id`;

      const results = await knex.raw(query);

      return response.status(201).json(results.rows[0]);
    } catch (error) {
        next(error);
    }

  },

  async delete(request, response, next) {
    try {
      const { id } = request.params;
      
      await knex.raw(`DELETE FROM users WHERE id='${id}'`);

      return response.send();

    } catch (error) {
      next(error);
    }
  },
}