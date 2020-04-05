const { users } = require('../mock');

const getAll = async () => {
  return users.get();
};

const getById = async userId => {
  return users.find(userId);
};

const create = async user => {
  return users.create(user);
};

const update = async user => {
  return users.update(user);
};

const deleteById = async userId => {
  return users.delete(userId);
};

module.exports = { getAll, getById, create, update, deleteById };
