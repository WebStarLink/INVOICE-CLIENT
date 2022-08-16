import React, { useEffect } from "react";
import classes from "./ManageClientsPage.module.scss";
// import { ReactComponent as SelectClientIcon } from "assets/icons/select-client.svg";
// import COLORS from "constants/colors";
import { TableManageClients } from "modules";
// import { IClient } from "./interface";
import { useDispatch, useSelector } from "react-redux";
import { clientsResponseSelector, getClients } from "store/global";

const ManageClientsPage = () => {
  //   const [selectedClient, setSelectedClient] = useState<IClient | null>(null);
  const dispatch = useDispatch();
  const clients = useSelector(clientsResponseSelector);
  //   const handleSelectClient = (client: IClient) => {
  //     setSelectedClient(client);
  //   };

  //   const saveClientHandler = (values: IClient) => {
  //     console.log(values);
  //   };

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <h1>Manage Clients</h1>
      {clients ? (
        <TableManageClients data={clients} onClick={() => console.log("Click")} />
      ) : (
        <div>Empty</div>
      )}

      <div className={classes.clientCard}>
        {/* {!selectedClient ? (
          <>
            <SelectClientIcon width={100} height={100} fill={COLORS.PRIMARY} />
            <h2 className={classes.clientCardTitle}>Please select a client for editing ...</h2>
          </>
        ) : (
          <FormProfile onSubmit={saveClientHandler} />
        )} */}
      </div>
    </div>
  );
};

export default ManageClientsPage;
