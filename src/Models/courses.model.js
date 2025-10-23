import mongoose from "mongoose";

export const coursesSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    note: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model("Courses", coursesSchema);

export default Courses;
