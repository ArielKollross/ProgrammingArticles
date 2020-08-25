
exports.up = async knex => {
  await knex.raw(
    `CREATE TABLE users (
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp",
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      email VARCHAR NOT NULL,
      password VARCHAR(30) NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
};

exports.down = async knex => await knex.raw('DROP TABLE users');
