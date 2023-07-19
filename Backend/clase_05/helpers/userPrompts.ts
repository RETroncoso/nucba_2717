import inquirer from "inquirer"
import { IUser } from "../interfaces/interfaces"

export const newUserPrompt = async(): Promise<IUser> => {
    return await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Ingrese su nombre:"
        },
        {
            type: "input",
            name: "surname",
            message: "Ingrese su apellido:"
        },
        {
            type: "number",
            name: "age",
            message: "Ingrese su edad:"
        },
    ])
}