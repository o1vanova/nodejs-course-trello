const { boards } = require('../mock');

const getAll = async () => {
  return boards;
};

const getById = async boardId => {
  return boards.find(board => board.id === boardId);
};

module.exports = { getAll, getById };
