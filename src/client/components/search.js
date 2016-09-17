import React from 'react';
import './search.sass';

const search = ({textChange, typeChange, activeType, types}) => {
  let options = [];
  for (let type in types) {
    if (Object.prototype.hasOwnProperty.call(types, type)) {
      options.push(
        <option key={type} value={type}>{types[type]}</option>
      )
    }
  }
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