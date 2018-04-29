
exports.up = function(knex, Promise) {
    return knex.schema.createTable('feelings', function(table){
    table.increments()
    table.text('description').notNullable()
    table.boolean('is_loved').notNullable()
    table.integer('order').notNullable()


  })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('feelings')
}
