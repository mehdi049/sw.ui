import React from "react";
import MaterialTable from "material-table";
import Alert from "react-bootstrap/Alert";

function TableData(props) {
  return props.data && Object.keys(props.data).length > 0 ? (
    <MaterialTable
      columns={props.columns}
      data={props.data}
      title={""}
      options={{
        ...props.options,
        ...{
          emptyRowsWhenPaging: false,
        },
      }}
      actions={props.actions}
    />
  ) : (
    <Alert variant="info">Aucune donnée à afficher.</Alert>
  );
}

export default TableData;
