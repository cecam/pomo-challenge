import { client } from "@/supabase/client";

export const signUp = async (email: string, password: string) => {
    try {
        await client.auth.signUp({
            email,
            password,
        });
    } catch (error) {
        console.error(error);
    }
};

export const signIn = async (email: string, password: string) => {
    try {
        await client.auth.signInWithPassword({
            email,
            password,
        });
    } catch (error) {
        console.error(error);
    }
}