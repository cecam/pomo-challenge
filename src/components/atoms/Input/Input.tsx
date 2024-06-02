import { FC } from "react";

export const Input: FC<InputProps> = ({
  type,
  value,
  name,
  onChange,
  label,
  error = "",
}) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} value={value} name={name} onChange={onChange} />
      {error && <span>{error}</span>}
    </div>
  );
};
