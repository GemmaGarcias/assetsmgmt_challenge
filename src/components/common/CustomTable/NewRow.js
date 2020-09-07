import React, { useState } from 'react';

  function NewRow({headers, data, onSubmit}){
    const [newRow, setNewRow] = useState({});

    function handleOnChange(e){
      e.persist();
      setNewRow((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }

    function onRowSubmit(){
      onSubmit(newRow);
      setNewRow({});
    }

    return (
      <tr>
        {headers.map((property, index) => (
          <td key={index} className="td-padding"><input name={property} onChange={handleOnChange} value={newRow[property] || ''}/></td>
        ))}
        <td><button className="table-button button-hover" onClick={onRowSubmit}>Submit</button></td>
      </tr>
    )
  }

export default NewRow;
