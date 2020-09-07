import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewRow from './NewRow';
import './CustomTable.css';
import ContextMenuComp from '../ContextMenuComp/ContextMenuComp';

const publicURL = process.env.PUBLIC_URL;

function CustomTable({headers, data, addColumn, disableContextMenu}) {
  const [dataTable, setDatatable] = useState([...data]);

  function onSubmit(newRow) {
    setDatatable([newRow, ...dataTable]);
  }
  
  return (
    <div className="parentTable">
      <table id="customTable">
        <thead>
          <tr>
            <>
              {headers.map((name, index) => (<th key={index}>{name}</th>))}
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
                        <ContextMenuComp 
                          row={row}
                          property={property} 
                          disable={disableContextMenu}/>
                      </td>
                    ))}
                    {addColumn && <td><Link to={`${publicURL}/entities/${row.id}`}>Related entities</Link></td>}   
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
