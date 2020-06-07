const { Schema, model } = require("mongoose");
const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  {
      timestamps: true
  }
);
module.exports = model('Project', ProjectSchema);
