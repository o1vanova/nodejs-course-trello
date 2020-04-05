const boards = [];

const getAll = async () => {
  return boards;
};

const getById = async boardId => {
  return boards.find(board => board.id === Number(boardId));
};

module.exports = { getAll, getById };
