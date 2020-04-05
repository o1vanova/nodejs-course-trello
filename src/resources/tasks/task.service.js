const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getById = taskId => tasksRepo.getById(taskId);

module.exports = { getAll, getById };
