const { Pool } = require('pg');
const dbConfig = require('./secrets/dbConfig');

const pool = new Pool(dbConfig);

module.exports = pool;

// pool.query('SELECT * FROM generation', (err, resp) => {
//   if (err) return console.log('error', err);

//   console.log('Response.rows: ', resp);
// });
