
exports.up = function(knex, Promise) {
    return knex.schema.createTable('scores', function(table){
    table.increments()
    table.integer('couple_id').unsigned()
    table.foreign('couple_id').references('couples.id')

    table.integer('from_user_id').unsigned()
    table.foreign('from_user_id').references('users.id')

    table.integer('to_user_id').unsigned()
    table.foreign('to_user_id').references('users.id')

    table.integer('users_feelings_id').unsigned()
    table.foreign('users_feelings_id').references('users_feelings.id')

    table.timestamps(true,true)
    table.integer('score').notNullable()
    table.text('feedback').notNullable()

  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('scores')
}
