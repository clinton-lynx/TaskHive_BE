const { transporter } = require("./nodemailer.config.js");

const sendSuccessMessage = async (email) => {
  try {
    let info = await transporter.sendMail({
      from: '"ISYPEASY" <clintonadeoti02@gmail.com>',
      to: email,
      subject: "Welcome Email",
      text: `Thank ofr registering with us`,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log("error from mailer" + error);
  }
};

module.exports = {
  sendSuccessMessage,
};
