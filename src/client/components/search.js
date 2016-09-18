import React from 'react';
import { COLUMN_TYPES, COLUMN_TYPES_KEYS } from '../constants/other';

const search = ({textChange, typeChange, activeType}) => {
  let options = COLUMN_TYPES_KEYS.map(key => (
      <option key={key} value={key}>{COLUMN_TYPES[key]}</option>
    )
  );
  return (
    <div id="search">
      <input onChange={(e) => textChange(e.target.value)} type="text"/>
      <select onChange={(e) => typeChange(e.target.value)} value={activeType}>
        {options}
      </select>
    </div>
  );
}
export default search;