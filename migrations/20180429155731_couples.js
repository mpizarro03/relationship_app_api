
exports.up = function(knex, Promise) {
    return knex.schema.createTable('couples', function(table){
    table.increments()
    table.integer('user1_id').unsigned()
    table.foreign('user1_id').references('users.id').onDelete('CASCADE')
    table.integer('user2_id').unsigned()
    table.foreign('user2_id').references('users.id').onDelete('CASCADE')
    table.unique(['user1_id', 'user2_id'])

  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('couples')
}
