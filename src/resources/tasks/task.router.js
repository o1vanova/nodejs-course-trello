const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
  res.status(200);
});

router.route('/:taskId').get(async (req, res) => {
  const id = req.params.taskId;
  const task = await tasksService.getById(id);
  res.json(task || {});
  res.status(200);
});

module.exports = router;
