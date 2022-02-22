
exports.up = function(knex) {
    knex.schema.createTable('clients', function (table) {
        table.increments();

        table.string('name').notNullable();  
        table.string('cpf').notNullable();
        table.string('telefone').notNullable();
        table.string('beneficio').notNullable();

        table.string('consultor_id').notNullable();
        
        table.foreign('consultor_id').references('id').inTable('consultors');
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('clients');
};
