const bcrypt = require("bcrypt");
const saltRounds = 10;

function genPass(pass) {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      return hash;
    });
  });
}

module.exports = genPass