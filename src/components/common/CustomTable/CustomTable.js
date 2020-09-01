import React, { useState } from 'react';
import NewRow from './NewRow';
import './CustomTable.css';

function CustomTable({headers, data, addColumn}) {
  const [dataTable, setDatatable] = useState([...data]);

  function onSubmit(newRow) {
    setDatatable([newRow, ...dataTable]);
  }
  
  return (
    <table id="customTable">
      <thead>
        <tr>
          <>
            {headers.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
            {addColumn && <th>{addColumn.header}</th>}
          </>
        </tr>
      </thead>
      <tbody>
        <>
          <NewRow headers={headers} data={dataTable} onSubmit={onSubmit}/>
          {dataTable.map((row) => (
            <tr key={row.id}>
              <>
                {headers.map((property, index) => (
                  <td key={index}>{row[property]}</td>
                ))}
                {addColumn && <td>{addColumn.content}</td>}
              </>
            </tr>
          ))}
        </>  
      </tbody>
    </table>
  );
}

export default CustomTable;
