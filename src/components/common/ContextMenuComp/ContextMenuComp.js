import React from 'react';
import './ContextMenuComp.css';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

  function ContextMenuComp({row, property, disable}){

    return (
      <>
        <ContextMenuTrigger id="context-menu-table" collect={props => props} rowId={row.id} disable={disable}>
          <div className="td-padding">{row[property]}</div>
        </ContextMenuTrigger>
        <ContextMenu id="context-menu-table">  
          <MenuItem onClick={(e, d) => console.log(d.rowId)}>
            Test 
          </MenuItem>
        </ContextMenu>
      </>
    )
  }

export default ContextMenuComp;
