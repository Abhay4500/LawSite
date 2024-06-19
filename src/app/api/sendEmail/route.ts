import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('Loading environment variables:', {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
  });
  try {
    const { name, email, phone, address, city } = await request.json();

    const { EMAIL_USER, EMAIL_PASS } = process.env;
    if (!EMAIL_USER || !EMAIL_PASS) {
      return NextResponse.json({ success: false, error: 'Email configuration not set up properly' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
    console.log(transporter, "transporter")
    try {
      await transporter.verify();
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: 'Failed to verify transporter' }, { status: 500 });
    }
    try {
      await transporter.sendMail({
        from: email,
        to: EMAIL_USER,
        subject: 'New message from contact form',
        html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Address: ${address}</p><p>City: ${city}</p>`,
      });
      return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
