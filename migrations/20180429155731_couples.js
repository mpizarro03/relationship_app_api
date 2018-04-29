
exports.up = function(knex, Promise) {
    return knex.schema.createTable('couples', function(table){
    table.increments()
    table.integer('user1_id').unsigned()
    table.foreign('user1_id').references('users.id')
    table.integer('user2_id').unsigned()
    table.foreign('user2_id').references('users.id')

  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('couples')
}
