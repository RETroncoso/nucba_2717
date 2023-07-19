
import { getWithFS, saveWithFS } from "./fsMethods"
import { newUserPrompt } from "./userPrompts";

export const getAllUsers = async() => {
    const currentUsers = await getWithFS("users");
    console.log(currentUsers);
};

export const createNewUser = async() => {
    const newUserData = await newUserPrompt();

    const currentUsers = await getWithFS("users");

    currentUsers.push(newUserData);

    await saveWithFS("users", currentUsers)
}