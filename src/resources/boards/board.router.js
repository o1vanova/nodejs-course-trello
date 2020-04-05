const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
  res.status(200);
});

router.route('/:boardId').get(async (req, res) => {
  const id = req.params.boardId;
  const board = await boardsService.getById(id);
  res.json(board || {});
  res.status(200);
});

module.exports = router;
