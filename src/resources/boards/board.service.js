const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getById = boardId => boardsRepo.getById(boardId);

module.exports = { getAll, getById };
