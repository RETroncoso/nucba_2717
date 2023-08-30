import Usuario, { IUser } from "../models/usuario"



export const existeEmail = async (email:string): Promise<void> => {

    const existeEmail: IUser | null = await Usuario.findOne({email});

    if (existeEmail) {
        throw new Error(`El correo ${email} ya está registrado`)
    }

}