import type { NextApiRequest, NextApiResponse } from 'next'
import * as nodemailer from 'nodemailer'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { sender, subject, body } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const modifiedBody = `
New message from: ${sender} 
at: ${new Date().toLocaleString()}
Subject: ${subject}

${body}
        `

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: (process.env.EMAIL_SUBJECT || "Website Message from " + sender),
            text: modifiedBody
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).end();
                console.error("Failed to send email: " + error);
                console.log({ details: mailOptions })
                console.log({ error, info })
                mailOptions.text = `Error sending message. Check server logs for details.`
            } else {
                res.redirect("/");
                console.log("Email sent: " + info.response);
            }
        });
    } else {
        res.status(405).end();
    }
}
