const request = require("./__mocks__/request");

function getUserName(userID) {
  return request("/users/" + userID).then((user) => user.name);
}

module.exports = getUserName;
