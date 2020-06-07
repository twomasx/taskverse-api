const { hashSync, compareSync } = require("bcryptjs");
const salt = 10;

const auth = {
  hash: (password) => {
    const hashPass = hashSync(password, salt);
    console.log(`:::HASH GENERATED SUCCESSFULLY:::`);
    return hashPass;
  },
  comp: (password, hash) => {
    const check = compareSync(password, hash);
    console.log(`:::PASSWORD COMPARED => ${check}:::`);
    return check;
  },
};

module.exports = auth;
