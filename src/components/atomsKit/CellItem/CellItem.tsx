import React from "react";
import { Icon } from "components/atomsKit/Elements";

// @ts-ignore
import classes from "./CellItem.module.css";

interface IProps {
  icon?: string;
  text?: string;
  description?: String;
  signText?: string;
  signDescription?: string;
}

const CellItem: React.FC<IProps> = (props) => {
  const { icon, text, description, signText, signDescription } = props;
  return (
    <div className={classes.wrap}>
      <Icon icon={icon} className={classes.icon} size={"2rem"} />
      <div>
        <p>
          {text}
          {signText}
        </p>
        <p className={classes.description}>
          {description}
          {signDescription}
        </p>
      </div>
    </div>
  );
};

export default CellItem;
