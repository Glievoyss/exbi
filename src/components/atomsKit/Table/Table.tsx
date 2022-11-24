

// @ts-ignore
import classes from "./Table.module.css";

interface IProps {
  tableConfig: {cells: {name:string, sortable: boolean}[]};
  children: React.ReactElement
}

const Table: React.FC<IProps> = (props) => {
  const {tableConfig, children}= props;
  return (
    <>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tr}>
            {tableConfig.cells.map((item) => (
              <th className={classes.th} key={item.name}>
                <p className={classes.field}>{item.name}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={classes.head}>
          {children}
        </tbody>
      </table>
    </>
  );
};

export default Table;
