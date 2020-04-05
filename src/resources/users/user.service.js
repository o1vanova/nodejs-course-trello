const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = userId => usersRepo.getById(userId);

module.exports = { getAll, getById };
