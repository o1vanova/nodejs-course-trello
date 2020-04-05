const router = require('express').Router();
const boardsService = require('./board.service');
const Board = require('./board.model');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
  res.status(200);
});

router.route('/:boardId').get(async (req, res) => {
  const id = req.params.boardId;
  const board = await boardsService.getById(id);
  if (board) {
    res.json(board);
    res.status(200);
  } else {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req, res) => {
  let board = req.body;
  const oldBoard = await boardsService.getById(board.id);
  if (oldBoard) {
    res.sendStatus(404);
  } else {
    board = new Board({
      title: board.title,
      columns: board.columns
    });
    await boardsService.create(board);
    res.json(board);
    res.status(200);
  }
});

router.route('/:boardId').put(async (req, res) => {
  const id = req.params.boardId;
  const board = await boardsService.getById(id);
  if (board) {
    const newBoard = req.body;
    board.title = newBoard.title;
    board.columns = newBoard.columns;

    await boardsService.update(board);
    res.json(board);
    res.status(200);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const id = req.params.boardId;
  const result = await boardsService.deleteById(id);
  res.status(result ? 200 : 404);
});

module.exports = router;
