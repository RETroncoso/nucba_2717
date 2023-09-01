import nodemailer from 'nodemailer';

const transporter  = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'camada2717@gmail.com',
        pass: 'prgxeertorgzskcb'
    },
    from: 'camada2717@gmail.com'
});

export const sendEmail = async (to: string, code: string): Promise<void> => {

    const mailOptions = {
        from: '"Nucbazappi" camada2717@gmail.com',
        to,
        subject: 'Código de verificación para Nucbazappi',
        text: `
            Llegó tu codigo para Nucbazappi.
            El código es ${code}
        `
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log("Correo electrónico enviado");   
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error)
    }

}