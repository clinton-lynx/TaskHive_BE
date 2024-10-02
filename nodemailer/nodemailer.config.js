const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

dotenv.config();
const transporter = nodemailer.createTransport({
  service: "gmail", 
  auth: {
    user:process.env.NODEMAILER_MAIL ,
    pass: process.env.NODEMAILER_PASSKEY,
  },
  tls: {
    rejectUnAuthorized: true,
  },
});

module.exports = {
  transporter,
};
