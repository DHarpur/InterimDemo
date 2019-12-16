const Sequelize = require('sequelize');
const database = require('./database');



const User = database.define(
    'users',
    {
        uid: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.TEXT
        },
        email_verified: {
            type: Sequelize.BOOLEAN
        }
    },
    { timestamps: false }
);

User.createUser = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    User.create({username: username, email: email, password: password}).then(newUser => { return res.json(newUser)});
};

User.find = async (req, res) => {
    User.find({where: {username: req.body.username, password: req.body.password}});
}

User.readAll = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.send({ users });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = User;
