const Column = require('./boards/column.model');
const Board = require('./boards/board.model');
const User = require('./users/user.model');
const Task = require('./tasks/task.model');

const creator = (args = []) => {
  let items = args;
  return {
    get() {
      return items;
    },
    find(id) {
      return items.find(item => item.id === id);
    },
    create(newItem) {
      const oldItem = items.find(item => item.id === newItem.id);
      if (oldItem) {
        return undefined;
      }
      items.push(newItem);
      return newItem;
    },
    update(newItem) {
      const index = items.indexOf(item => item.id === newItem.id);
      if (index > -1) {
        items = items.slice(index, 1, newItem);
        return newItem;
      }
      return undefined;
    },
    delete(id) {
      const index = items.indexOf(item => item.id === id);
      items = items.filter(item => item.id !== id);
      return index > -1;
    }
  };
};

const columns = [
  new Column({ title: 'Backlog', order: 0 }),
  new Column({ title: 'In sprint', order: 1 }),
  new Column({ title: 'In progress', order: 2 }),
  new Column({ title: 'Done', order: 3 })
];

const boards = creator([new Board({ title: 'My board', columns })]);

const users = creator([
  new User({ name: 'Jhon Smith', login: 'user1', password: '123' })
]);

const tasks = creator([
  new Task({
    title: 'Rest Api',
    description: 'Implement REST API',
    userId: users.get()[0].id,
    boardId: boards.get()[0].id,
    columnId: columns[0].id
  })
]);

module.exports = {
  columns,
  boards,
  tasks,
  users
};
