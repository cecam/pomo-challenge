import { signUpService } from "../../application/Auth.service";

import { User } from "../../domain/User";

export const useAuth = (user: User) => {
  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = user;
    await signUpService(email, password);
  };

  return {
    handleSignUpSubmit,
  };
};
