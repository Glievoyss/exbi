import React from "react";
import { Icon } from "components/atomsKit/Elements";
// @ts-ignore
import classes from "./ButtonIcon.module.css";

import cn from "classnames";

interface IProps {
  onClick: () => void;
  icon: string;
  bigSize?: boolean;
}

const ButtonIcon: React.FC<IProps> = (props) => {
  const { onClick, icon, bigSize } = props;
  return (
    <button
      onClick={onClick}
      className={cn(classes.btn, bigSize && classes.btnBig)}
    >
      <Icon
        icon={icon}
        className={cn(classes.icon, bigSize && classes.iconBig)}
      />
    </button>
  );
};

export default ButtonIcon;
