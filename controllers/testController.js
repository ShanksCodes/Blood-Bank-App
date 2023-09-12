const testController = (req, res) => {
  res.status(200).json({
    message: "Hi his is a test route",
    success: "true",
  });
};

module.exports = { testController };
