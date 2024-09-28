const Writer = require("../models/register");
const { sendSuccessMessage } = require("../nodemailer/email");

const register = async (req, res) => {
  const { name, email, department, level, school, idCardPhoto } = req.body;
  try {
    if (!email || !school || !name || !department || !level || !idCardPhoto) {
      return res.status(400).json({
        success: false,
        message: " all filleds are required",
      });
    }
    const existingWriter = await Writer.findOne({ email });
    if (existingWriter) {
      return res
        .status(400)
        .json({ success: false, message: "writer already exist" });
    }
    const writer = await Writer.create({
      name,
      email,
      department,
      level,
      school,
      idCardPhoto,
    });
    sendSuccessMessage(email);

    res.status(201).json({
      success: true,
      message: "Check Your Mail for welcome email",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register };
