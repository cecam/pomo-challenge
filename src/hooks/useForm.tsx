import { useState } from "react";

interface IUseForm<T> {
  initialValues: T;
}

export const useForm = <T extends {}>({ initialValues }: IUseForm<T>) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return {
    values,
    handleInputChange,
  };
};
