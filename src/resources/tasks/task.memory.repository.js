const { tasks } = require('../mock');

const getAll = async () => {
  return tasks.get();
};

const getById = async taskId => {
  return tasks.find(taskId);
};

const create = async task => {
  return tasks.create(task);
};

const update = async task => {
  return tasks.update(task);
};

const deleteById = async taskId => {
  return tasks.delete(taskId);
};

module.exports = { getAll, getById, create, update, deleteById };
