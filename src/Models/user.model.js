import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      minLength: [6],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", userSchema);

export default Users;
