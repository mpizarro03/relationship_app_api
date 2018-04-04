
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
    table.increments()
    table.string('display_name').notNullable()
    table.string('email').unique().notNullable()
    table.integer('reminder_freq').notNullable()
  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
}
