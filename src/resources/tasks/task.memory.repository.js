const { tasks } = require('../mock');

const getAll = async () => {
  return tasks;
};

const getById = async taskId => {
  return tasks.find(task => task.id === taskId);
};

module.exports = { getAll, getById };
