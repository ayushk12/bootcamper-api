// @desc  GET all bootcamps
// @routes GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "show all bootcamps" });
};

// @desc  GET single bootcamps
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, mesg: `get bootcamp ${req.params.id}` });
};

// @desc  create a new bootcamp
// @routes GET /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ sucess: true, msg: "create a bootcamps" });
};

// @desc  Updatebootcamps
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, mesg: `update bootcamp ${req.params.id}` });
};

// @desc  Delete bootcamps
// @routes GET /api/v1/bootcamps/:id
// @access Public
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ sucess: true, mesg: `delete bootcamp ${req.params.id}` });
};
