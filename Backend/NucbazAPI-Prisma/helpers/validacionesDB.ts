import { prisma } from "../app";
import { sendEmail } from "../mailer/mailer";
import Usuario, { IUser } from "../models/usuario"


export const existeEmail = async (email:string): Promise<void> => {

    // const existeEmail: IUser | null = await Usuario.findOne({email});
    const existeEmail = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (existeEmail && existeEmail.verified) {
        throw new Error(`El correo ${email} ya está registrado`)
    }

    if (existeEmail && !existeEmail.verified) {
        await sendEmail(email, existeEmail.code as string)
        throw new Error(`El usuario ya está registrado. Se envío nuevamente el código de verificación a ${email}`)
    }

}