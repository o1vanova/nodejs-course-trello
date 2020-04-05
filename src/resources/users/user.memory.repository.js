const users = [];

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  return users;
};

const getById = async userId => {
  return users.find(user => user.id === Number(userId));
};

module.exports = { getAll, getById };
