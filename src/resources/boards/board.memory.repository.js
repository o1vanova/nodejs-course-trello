const { boards } = require('../mock');

const getAll = async () => {
  return boards.get();
};

const getById = async boardId => {
  return boards.find(boardId);
};

const create = async board => {
  return boards.create(board);
};

const update = async board => {
  return boards.update(board);
};

const deleteById = async boardId => {
  return boards.delete(boardId);
};

module.exports = { getAll, getById, create, update, deleteById };
