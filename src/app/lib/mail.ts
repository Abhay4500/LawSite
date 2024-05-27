import nodemailer from 'nodemailer'
export async function sendMail({ name, email, phone, address, city }: {
    name: any;
    email: any;
    phone: any;
    address: any;
    city: any;
}) {
    const { EMAIL_USER, EMAIL_PASS } = process.env;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        },
    });
    try {
        const testResult = await transporter.verify();
        console.log(testResult)
    }
    catch (error) {
        console.log(error, "error")
    }



    try {
        const sendResult = await transporter.sendMail({
            from: email,
            to: EMAIL_USER,
            html: `<p>Name: ${name}</p><p>Phone: ${phone}</p><p>Address: ${address}</p><p>${address}</p><p>${city}</p>`,
        })
    }
    catch (error) {
        console.log(error)
    }
}