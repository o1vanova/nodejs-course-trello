const Column = require('./boards/column.model');
const Board = require('./boards/board.model');
const User = require('./users/user.model');
const Task = require('./tasks/task.model');

const columns = [
  new Column({ title: 'Backlog', order: 0 }),
  new Column({ title: 'In sprint', order: 1 }),
  new Column({ title: 'In progress', order: 2 }),
  new Column({ title: 'Done', order: 3 })
];

const boards = [new Board({ title: 'My board', columns })];

const users = [
  new User({ name: 'Jhon Smith', login: 'user1', password: '123' }),
  new User({ name: 'Alex Snow', login: 'user2', password: '123' })
];

const tasks = [
  new Task({
    title: 'Rest Api',
    description: 'Implement REST API',
    userId: users[0].id,
    boardId: boards[0].id,
    columnId: columns[0].id
  })
];

module.exports = { boards, columns, users, tasks };
