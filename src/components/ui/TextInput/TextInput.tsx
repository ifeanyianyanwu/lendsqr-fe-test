import { ReactNode, SyntheticEvent } from "react";
import "./TextInput.scss";

interface IProps {
  name: string;
  type?: string;
  onChange?: (e: SyntheticEvent) => void;
  placeholder: string;
  label?: string;
  value?: string;
  children?: ReactNode;
  id?: string;
}

const TextInput = ({
  name,
  type,
  onChange,
  placeholder,
  label,
  value,
  children,
  id,
}: IProps) => {
  return (
    <div className="container">
      {label && <label htmlFor={id || name}>{label}</label>}
      <div className="input-container">
        <input
          type={type || "text"}
          onChange={onChange}
          name={name}
          id={id || name}
          placeholder={placeholder}
          value={value}
        />
        {children}
      </div>
    </div>
  );
};

export default TextInput;
