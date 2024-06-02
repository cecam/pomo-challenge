import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInService, signUpService } from "../../application/Auth.service";

import { User } from "../../domain/User";
import { client } from "@/supabase/client";

export const useAuth = (user: User) => {
  const router = useRouter();
  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = user;
    await signUpService(email, password);
  };

  const handleSignInSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = user;
    await signInService(email, password);
  };

  useEffect(() => {
    const { data: authListener } = client.auth.onAuthStateChange(
      (event, session) => {
        if (!session) {
          router.replace("/login");
        } else {
          router.replace("/dashboard");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return {
    handleSignUpSubmit,
    handleSignInSubmit,
  };
};
