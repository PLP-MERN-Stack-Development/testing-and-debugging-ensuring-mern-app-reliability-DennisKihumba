const Bug = require('../models/Bug');

// Get all bugs
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    next(error);
  }
};

// Create new bug
exports.createBug = async (req, res, next) => {
  try {
    const bug = new Bug(req.body);
    const saved = await bug.save();
    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
};

// Update bug
exports.updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bug);
  } catch (error) {
    next(error);
  }
};

// Delete bug
exports.deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted' });
  } catch (error) {
    next(error);
  }
};
