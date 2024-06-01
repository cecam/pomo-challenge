"use client";
import { User } from "../../domain/User";
import { useForm } from "@/hooks/useForm";
import { useAuth } from "./useAuth";

const LoginPage = () => {
  const { values, handleInputChange } = useForm<User>({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { handleSignUpSubmit } = useAuth(values);

  return (
    <div>
      <h1>Bienvenido a la carrera!</h1>
      <form onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
        />
        <button type="submit">Comienza a concentrarte</button>
      </form>
    </div>
  );
};

export default LoginPage;
