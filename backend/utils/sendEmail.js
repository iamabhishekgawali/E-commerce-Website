const nodemailer = require("nodemailer");
const sendEmail = async (options) => {
  const transpoter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: "alienx042@gmail.com",
      pass: "codeforces",
    },
  });

  const mailoptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  transpoter.sendMail(mailoptions);
};

module.exports = sendEmail;
