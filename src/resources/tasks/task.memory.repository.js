const tasks = [];

const getAll = async () => {
  return tasks;
};

const getById = async taskId => {
  return tasks.find(task => task.id === Number(taskId));
};

module.exports = { getAll, getById };
