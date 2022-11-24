import { MenuList } from "components/atomsKit/Elements";
import { Icon, ButtonIcon } from "components/atomsKit/Elements";

import Routes from './Routes'


// @ts-ignore
import { configMenu } from "data/config.js";

// @ts-ignore
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      {/* LeftSIdeBar */}
      <section className={classes.wrapSideBar}>
        <div className={classes.logoWrap}>
          <h1>
            <Icon icon={"logo"} className={classes.icon}/>
          </h1>
          <ButtonIcon onClick={() => {}} icon={"Container"} />
        </div>
        <div className={classes.menu}>
          <MenuList menuList={configMenu} />
        </div>
      </section>
      {/* /////LeftSIdeBar */}
      <Routes />
      </div>
   
  );
};

export default Layout;
