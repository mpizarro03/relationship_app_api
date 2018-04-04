module.exports = {

  development: {
  client: 'pg',
  connection: 'postgresql://localhost:5432/relationship_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/relationship_test'
 },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
 },

};
