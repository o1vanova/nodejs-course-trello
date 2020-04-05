const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = userId => usersRepo.getById(userId);

const create = user => usersRepo.create(user);

const update = user => usersRepo.update(user);

const deleteById = userId => usersRepo.deleteById(userId);

module.exports = { getAll, getById, create, update, deleteById };
