import { signIn, signUp } from "../infraestructure/Auth.repository";

export const signUpService = async (email: string, password: string) => {
    await signUp(email, password);
};

export const signInService = async (email: string, password: string) => {
    await signIn(email, password);
};
