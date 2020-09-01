import React from 'react';
import './CustomTable.css';

function CustomTable({headers, data, addColumn}) {
  
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
          {data.map((row) => (
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
