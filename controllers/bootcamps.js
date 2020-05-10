const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("../models/Bootcamp");

// @desc  GET all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ sucess: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

// @desc  GET single bootcamps
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp) {
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404);
    }

    res.status(200).json({ sucess: true, data: bootcamp });
  } catch (err) {
    //res.status(400).json({ sucess: false });
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
};

// @desc  create a new bootcamp
// @routes GET /api/v1/bootcamps
// @access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    if (!bootcamp) {
      return res.status(400).json({ succes: false });
    }
    res.status(201).json({ sucess: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ sucess: false });
  }
};

// @desc  Updatebootcamps
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp) {
      return res.status(400).json({ succes: false });
    }
    res.status(200).json({ succes: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ succes: false });
  }
};

// @desc  Delete bootcamps
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ succes: false });
    }
    return res.status(200).json({ succes: true, data: {} });
  } catch (error) {
    res.status(400).json({ succes: false });
  }
};
