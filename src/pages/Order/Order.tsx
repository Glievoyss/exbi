import { useEffect } from "react";

import {
  PageName,
  ButtonIcon,
  Table,
  CellItem,
  DateTime,
  Input,
  Confirmed,
} from "../../components/atomsKit/Elements";

import { observer } from "mobx-react-lite";

import state from "../../store/state";

// @ts-ignore
import { tableConfig } from "./helpers/tableConfig";
import { parsIcon, parsStatus } from "../../helpers/helpers";

// @ts-ignore
import classes from "./Order.module.css";

const Order = observer(() => {
  useEffect(() => {
    state.fetchData();
  }, []);

  return (
    <>
      <div className={classes.pageHeader}>
        <PageName title={"ORDERS"} />
        <div className={classes.wrapInteractive}>
          <Input
            value={state.search}
            onChange={(e) => state.handleSearch(e)}
            placeholder={"Search orders"}
          />
          <ButtonIcon onClick={() => {}} icon={"filter"} bigSize={true} />
        </div>
      </div>
      <div className={classes.pageBody}>
        <Table tableConfig={tableConfig}>
          <>
            {state.serchData.map((item: any) => (
              <tr className={classes.trBody} key={item.id}>
                <td className={classes.tdBody}>
                  <CellItem
                    text={`${item.amount} ${item.amountValue}`}
                    icon={parsIcon(item.amount)}
                  />
                </td>
                <td className={classes.tdBody}>
                  <CellItem
                    description={String(item.valueInUsd)}
                    signDescription={"$"}
                  />
                </td>
                <td className={classes.tdBody}>
                  <DateTime date={item.date} />
                </td>
                <td className={classes.tdBody}>
                  <CellItem
                    text={`#${item.invoiceName}`}
                    description={item.invoiceText}
                  />
                </td>
                <td className={classes.tdBody}>
                  <CellItem
                    text={item.clientName}
                    description={item.clientText}
                  />
                </td>
                <td className={classes.tdBody}>
                  <CellItem text={item.network} />
                </td>
                <td className={classes.tdBody}>
                  <Confirmed
                    text={parsStatus(item.status)}
                    isTimeOut={item.status}
                  />
                </td>
              </tr>
            ))}
          </>
        </Table>
      </div>
    </>
  );
});

export default Order;
