import { useForm } from "@/hooks/useForm";
import { useAuth } from "./useAuth";
import { Input } from "@/components/atoms/Input/Input";

const LoginPage = () => {
  const { values, handleInputChange } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const { handleSignInSubmit } = useAuth(values);

  return (
    <form onSubmit={handleSignInSubmit}>
      <Input
        label="Email"
        type="email"
        value={values.email}
        name="email"
        onChange={handleInputChange}
      />
      <Input
        label="Password"
        type="password"
        value={values.password}
        name="password"
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
