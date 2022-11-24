// @ts-ignore
import classes from "./PageName.module.css";

interface IProps {
  title: string;
}

const PageName: React.FC<IProps> = (props) => {
  return <h2 className={classes.title}>{props.title}</h2>;
};

export default PageName;
