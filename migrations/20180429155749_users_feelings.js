
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_feelings', function(table){
    table.increments()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.integer('feeling_id').unsigned()
    table.foreign('feeling_id').references('feelings.id')

  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users_feelings')
}
