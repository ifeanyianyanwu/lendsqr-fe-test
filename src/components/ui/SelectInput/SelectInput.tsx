import { Key, ReactNode, SyntheticEvent } from "react";
import "./SelectInput.scss";

interface IProps {
  name?: string;

  onChange?: (e: SyntheticEvent) => void;
  options: Option[];
  label?: string;
  value?: string;

  id?: string;
}

interface Option {
  disabled?: boolean;
  key: number;
  value: string;
}

const SelectInput = ({ name, onChange, options, label, value, id }: IProps) => {
  return (
    <div className="select-input__container">
      {label && <label htmlFor={id || name}>{label}</label>}
      <div className="select-input__input-container">
        <select name={name} id={id || name} onChange={onChange} value={value}>
          {options?.map((item) => (
            <option
              value={item.value}
              key={item.key}
              disabled={item.disabled || false}
            >
              {item.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
