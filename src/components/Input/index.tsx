import React from 'react';

export interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  label
}) => {
  return (
    <div className="flex justify-between items-center flex-row ">
      <label className="text-left text-xl w-full" htmlFor={name}>
        {label}
      </label>
      <input
        className="text-l h-12 pl-5 bg-zinc-100 text-black rounded m-2"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
