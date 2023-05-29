import sendgrid from "@sendgrid/mail";
import * as Sentry from '@sentry/nextjs';
import { performRecaptchaCheck } from "../../src/server/recaptcha_utils";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function handler(req, res) {
  await performRecaptchaCheck(req.body.recaptchaToken)

  try {
    debugger;
    await sendgrid.send({
      to: "plentycafeandcollective@gmail.com",
      from: "plentycafeandcollective@gmail.com",
      replyTo: {
        email: req.body.email,
        name: req.body.fullname
      },
      subject: `[Message from Contact Form] : ${req.body.fullname}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
            </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
            </div>
      </body>
      </html>`,
    });
  } catch (error) {
    debugger;
    Sentry.captureException(error);
    return res.status(error.statusCode || 500).json({ error: "Email could not be sent" });
  }

  return res.status(200).json({ error: null });
}

export default handler;
