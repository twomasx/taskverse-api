const { connect } = require("mongoose");
const url = "mongodb://localhost:27017/taskverse_database";
const settings = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { User, Project, Task } = require("./../models");
const db = {
  sync: () =>
    connect(url, settings)
      .then((cnctd) =>
        console.log(
          `:::CONNECTED TO DATABASE => ${cnctd.connections[0].name}::: \n` +
            `:::INSTANTIATED MODELS => ${cnctd.modelNames()}:::`
        )
      )
      .catch((err) => console.log(`:::ERROR CONNECTING TO DATABASE => ${err}`)),
};
module.exports = db;
