
exports.up = async knex => {
  await knex.raw(
    `CREATE TABLE projects (
      project_id UUID DEFAULT uuid_generate_v4(),
      title VARCHAR NOT NULL,
      user_id UUID,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY(project_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE    
    )
  `);
};

exports.down = async knex => await knex.raw('DROP TABLE projects');
