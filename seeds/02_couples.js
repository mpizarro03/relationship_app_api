
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('couples').del()
    .then(function () {
      // Inserts seed entries
      return knex('couples').insert([
        {id: 1, user1_id: 1, user2_id: 2},
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('couples_id_seq', (SELECT MAX(id) FROM couples));"
      );
    });
};
