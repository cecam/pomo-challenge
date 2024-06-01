import { signUp } from "../infraestructure/Auth.repository";

export const signUpService = async (email: string, password: string) => {
    await signUp(email, password);
};