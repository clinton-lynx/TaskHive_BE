const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user: process.env.NODEMAILER_PASSKEY,
    pass: process.env.NODEMAILER_MAIL,
  },
  tls: {
    rejectUnAuthorized: true,
  },
});

module.exports = {
  transporter,
};
