const { transporter } = require("./nodemailer.config.js");

const sendSuccessMessage = async (email, name) => {
  try {
    let info = await transporter.sendMail({
      from: '"ISYPEASY" <clintonadeoti02@gmail.com>',
      to: email,
      subject: "Welcome Email",
      text: `Thank for registering with Ispeasy, ${name}!`,
    });
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.log("error from mailer" + error);
  }
};

module.exports = {
  sendSuccessMessage,
};
