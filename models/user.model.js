const { Schema, model } = require("mongoose");
const { AuthUtil } = require("./../utils");
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordUpdate: {
      type: Boolean,
      required: true,
      default: true,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  {
    timestamps: true,
  }
);
UserSchema.pre("save", function (next) {
  if (this.passwordUpdate) {
    this.password = AuthUtil.hash(this.password);
    this.passwordUpdate = false;
    return next();
  }
  return next();
});
module.exports = model("User", UserSchema);
