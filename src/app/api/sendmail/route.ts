import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendEmailHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, address, city } = req.body;

        // Check if environment variables are set
        const { EMAIL_USER, EMAIL_PASS } = process.env;
        if (!EMAIL_USER || !EMAIL_PASS) {
            return res.status(500).json({ success: false, error: 'Email configuration not set up properly' });
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            },
        });

        try {
            const testResult = await transporter.verify();
            console.log(testResult);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Failed to verify transporter' });
        }

        try {
            const sendResult = await transporter.sendMail({
                from: email,
                to: EMAIL_USER,
                subject: 'New message from contact form',
                html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Address: ${address}</p><p>City: ${city}</p>`,
            });
            console.log(sendResult);
            return res.status(200).json({ success: true, message: 'Email sent successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}
