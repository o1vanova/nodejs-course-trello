const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getById = boardId => boardsRepo.getById(boardId);

const create = board => boardsRepo.create(board);

const update = board => boardsRepo.update(board);

const deleteById = boardId => boardsRepo.deleteById(boardId);

module.exports = { getAll, getById, create, update, deleteById };
