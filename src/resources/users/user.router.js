const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
  res.status(200);
});

router.route('/:userId').get(async (req, res) => {
  const id = req.params.userId;
  const user = await usersService.getById(id);
  res.json(user ? user.map(User.toResponse) : {});
  res.status(200);
});

module.exports = router;
