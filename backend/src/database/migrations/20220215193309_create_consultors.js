
exports.up = function(knex) {
  knex.schema.createTable('consultors', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();  
      table.string('email').notNullable();

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('consultors');
};
