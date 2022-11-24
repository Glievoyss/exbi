import React from "react";

import { Icon } from "../Elements";

// @ts-ignore
import classes from "./Input.module.css";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

const Input: React.FC<IProps> = (props) => {
  const { onChange, value, placeholder } = props;
  return (
    <div className={classes.wrap}>
      <Icon icon={"leanse"} size={"0.875rem"} />
      <input
        className={classes.input}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
