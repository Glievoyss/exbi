import Orders from "../pages/Order/Order";

// @ts-ignore
import classes from "./Layout.module.css";

// {will be logic for routs}
const Routes = () => {
  return (
    <div className={classes.pageWrap}>
      <Orders />
    </div>
  );
};

export default Routes;
