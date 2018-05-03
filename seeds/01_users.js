
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 1, display_name: 'Teddi', email: 't@example.com', reminder_freq: '7'},
        {id: 2, display_name: 'Keith', email: 'k@example.com', reminder_freq: '7'},
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
