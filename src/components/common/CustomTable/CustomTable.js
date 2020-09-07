import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import NewRow from './NewRow';
import './CustomTable.css';

const publicURL = process.env.PUBLIC_URL;

function CustomTable({headers, data, addColumn, disableContextMenu}) {
  const [dataTable, setDatatable] = useState([...data]);
  const [currentId, setCurrentId] = useState();

  function onSubmit(newRow) {
    setDatatable([newRow, ...dataTable]);
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
                <tr key={row.id}>
                  <>
                    {headers.map((property, index) => (
                      <td key={index}>
                        <ContextMenuTrigger id="context-menu-table" disable={disableContextMenu}>
                          <div className="trigger-area" onContextMenu={() => setCurrentId(row.id)}>{row[property]}</div>
                        </ContextMenuTrigger>
                      </td>
                    ))}
                    {addColumn && <td><Link to={`${publicURL}/entities/${row.id}`}>Related entities</Link></td>}   
                  </>
                </tr>
              ))}            
          </>  
        </tbody>
      </table>
      <ContextMenu id="context-menu-table">  
        <MenuItem onClick={() => console.log(currentId)}>
          Test 
        </MenuItem>
      </ContextMenu>
    </div>
  );
}

export default CustomTable;
