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
  if (user) {
    res.json(User.toResponse(user));
    res.status(200);
  } else {
    res.sendStatus(404);
  }
});

router.route('/').post(async (req, res) => {
  let user = req.body;
  const oldUser = await usersService.getById(user.id);
  if (oldUser) {
    res.sendStatus(404);
  } else {
    user = new User({
      name: user.name,
      login: user.login,
      password: user.password
    });
    await usersService.create(user);
    res.json(User.toResponse(user));
    res.status(200);
  }
});

router.route('/:userId').put(async (req, res) => {
  const id = req.params.userId;
  const user = await usersService.getById(id);
  if (user) {
    const newUser = req.body;
    user.name = newUser.name;
    user.login = newUser.login;
    if (newUser.password) {
      user.password = newUser.password;
    }

    await usersService.update(user);
    res.json(User.toResponse(user));
    res.status(200);
  } else {
    res.sendStatus(404);
  }
});

router.route('/:userId').delete(async (req, res) => {
  const id = req.params.userId;
  const result = await usersService.deleteById(id);
  res.status(result ? 200 : 404);
});

module.exports = router;
