const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getById = taskId => tasksRepo.getById(taskId);

const create = task => tasksRepo.create(task);

const update = task => tasksRepo.update(task);

const deleteById = taskId => tasksRepo.deleteById(taskId);

module.exports = { getAll, getById, create, update, deleteById };
