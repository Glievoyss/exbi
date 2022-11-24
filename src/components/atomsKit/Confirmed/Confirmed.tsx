import React from "react";
import cn from "classnames";

// @ts-ignore
import classes from "./Confirmed.module.css";

interface IProps {
  text: string;
  isTimeOut: boolean;
}

const Confirmed: React.FC<IProps> = (props) => {
  const { text, isTimeOut } = props;
  return (
    <p className={cn(classes.wrap, isTimeOut === false && classes.timeOut)}>
      {text}
    </p>
  );
};

export default Confirmed;
