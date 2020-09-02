import React, { useState } from 'react';
import NewRow from './NewRow';
import './CustomTable.css';

function CustomTable({headers, data, addColumn, contextmenu}) {
  const [dataTable, setDatatable] = useState([...data]);

  function onSubmit(newRow) {
    setDatatable([newRow, ...dataTable]);
  }

  function contextMenu(e, row){
    if(contextmenu){
      e.preventDefault();
      alert(`Test: ${row}`)
    }
  }
  
  return (
    <div className="parentTable">
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
              <tr key={row.id} onContextMenu={e => contextMenu(e, row.id)}>
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
    </div>
  );
}

export default CustomTable;
