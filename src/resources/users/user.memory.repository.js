const { users } = require('../mock');

const getAll = async () => {
  return users;
};

const getById = async userId => {
  return users.find(user => user.id === userId);
};

module.exports = { getAll, getById };
