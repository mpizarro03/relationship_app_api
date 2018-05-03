
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('feelings').del()
    .then(function () {
      // Inserts seed entries
      return knex('feelings').insert([
        {id: 1, description: 'Appreciation', is_loved: true, order:1},
        {id: 2, description: 'Quality Time', is_loved: true, order:2},
        {id: 3, description: 'Affection', is_loved: true, order:3},
        {id: 4, description: 'Adoration', is_loved: true, order:4},
        {id: 5, description: 'Sexual Intimacy', is_loved: true, order:5},
        {id: 6, description: 'Recreation Together', is_loved: true, order:6},
        {id: 7, description: 'Intimate Conversation', is_loved: true, order:7},
        {id: 8, description: 'Harsh Anger', is_loved: false, order:1},
        {id: 9, description: 'Passive', is_loved: false, order:2},
        {id: 10, description: 'Critical', is_loved: false, order:3},
        {id: 11, description: 'No Voice', is_loved: false, order:4},
        {id: 12, description: 'Unsolicited Advice', is_loved: false, order:5},
        {id: 13, description: 'Stonewalling', is_loved: false, order:6},
        {id: 14, description: 'Defensive', is_loved: false, order:7},
      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('feelings_id_seq', (SELECT MAX(id) FROM feelings));"
      );
    })
};
