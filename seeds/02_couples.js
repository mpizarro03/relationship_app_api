
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('couples').del()
    .then(function () {
      // Inserts seed entries
      return knex('couples').insert([
        {id: 1, user1_id: 1, user2_id: 2},
      ]);
    });
};
