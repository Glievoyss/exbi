import React from "react";

import  Icon from "../Icon/Icon";

import { TMenuList, TOptionMenu } from "../../../data/types";

// @ts-ignore
import classes from "./MenuList.module.css";

interface IProps {
  menuList: TMenuList;
}

const MenuList: React.FC<IProps> = (props) => {
  const { menuList } = props;
  return (
    <div className={classes.wrap}>
      <p className={classes.title}>MENU</p>
      <ul>
        {menuList.map(
          (option: TOptionMenu) => (
            <li key={option.name} className={classes.itemList}>
              <a className={classes.link}>
                <Icon
                  size="1.25rem"
                  icon={option.icon}
                  className={classes.icon}
                />
                <span className={classes.linkName}>{option.name}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default MenuList;
