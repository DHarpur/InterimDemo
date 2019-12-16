const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demodatabase',
    password: 'Ruprah55',
    port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY uid ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
};

const getUserByUsername = (request, response) => {
    const { username } = request.body;

    pool.query('SELECT * FROM users WHERE username = $1', [username], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    });
};

const createUser = (request, response) => {
    const { username, password, email } = request.body;
  
    pool.query('INSERT INTO users (username, password, email) VALUES ($1, $2, $3)', [username, password, email], (error, results) => {
      if (error) {
        throw error
      };
      return response.status(201).send(`User added with ID: ${results.insertId}`);
    });
};
  
module.exports = {
    getUsers, getUserByUsername, createUser
};
