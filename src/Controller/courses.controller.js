import Courses from "../Models/courses.model";

export const createCourses = async (req, res) => {
  try {
    const createCourses = await Courses.create({ ...req.body });

    return res.status(201).json(createCourses);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const getAll = async (req, res) => {
  try {
    const getAll = await Courses.find();

    return res.status(201).json(getAll);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const getById = async (req, res) => {
  try {
    const getById = await Courses.findById(req.params.id);

    return res.status(201).json(getById);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const updateCourses = async (req, res) => {
  try {
    const updateCourses = await Courses.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    return res.status(201).json(updateCourses);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const deleteCourses = async (req, res) => {
  try {
    const deleteCourses = await Courses.findByIdAndDelete(req.params.id);

    return res.status(201).json(deleteCourses);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
