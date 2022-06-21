import React, { useState } from "react";
import classes from "./ManageClientsPage.module.scss";
import { ReactComponent as SelectClientIcon } from "assets/icons/select-client.svg";
import COLORS from "constants/colors";
import { FormProfile, TableManageClients } from "modules";
import { IClient } from "./interface";
import { IProfile } from "interfaces";

const ManageClientsPage = () => {
  const [selectedClient, setSelectedClient] = useState<IClient | null>(null);
  const handleSelectClient = (client: IClient) => {
    setSelectedClient(client);
  };

  const saveClientHandler = (values: IProfile) => {
    console.log(values);
  };

  const tableData = [
    { id: 1, name: "AHello", text: "World", number: 2020, desctiption: "Code" },
    { id: 2, name: "Hello", text: "World", number: 2020, desctiption: "Code" },
    { id: 3, name: "VHello", text: "World", number: 2020, desctiption: "Code" },
    { id: 4, name: "Hello", text: "World", number: 2020, desctiption: "Code" },
    { id: 5, name: "Hello", text: "World", number: 2020, desctiption: "Code" },
    { id: 6, name: "Hello", text: "World", number: 2020, desctiption: "Code" },
    { id: 7, name: "BHello", text: "World", number: 2020, desctiption: "Code" },
    { id: 8, name: "Hello", text: "World", number: 2020, desctiption: "Code" },
    { id: 9, name: "Hello", text: "World", number: 2020, desctiption: "Code" },
  ].sort((a, b) => (a.name < b.name ? -1 : 1));

  return (
    <div className={classes.wrapper}>
      <h1>Manage Clients</h1>
      <TableManageClients data={tableData} onClick={handleSelectClient} />
      <div className={classes.clientCard}>
        {!selectedClient ? (
          <>
            <SelectClientIcon width={100} height={100} fill={COLORS.PRIMARY} />
            <h2 className={classes.clientCardTitle}>Please select a client for editing ...</h2>
          </>
        ) : (
          <FormProfile onSubmit={saveClientHandler} />
        )}
      </div>
    </div>
  );
};

export default ManageClientsPage;
