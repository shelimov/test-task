import './table.sass';
import React from 'react';
import {
  COLUMN_TYPES, COLUMN_TYPES_KEYS, REP_TYPES
} from '../constants/other';

const Row = ({id, name, author, type, typeChange}) => {
  const options = REP_TYPES.map((type, index) => (
      <option key={index} value={index}>{type}</option>
    )
  );
  const select = (
    <select onChange={(e) => typeChange(id, e.target.value)} value={type}>
      {options}
    </select>
  );
  return (
    <tr>
      <td className="column-id">{id}</td>
      <td className="column-name">{name}</td>
      <td className="column-author">{author}</td>
      <td className="column-select">{select}</td>
    </tr>
  )
}

const table = ({content, typeChange, isLoading}) => {
  const els = content.map(el => (
    <Row
      key={el.id}
      id={el.id}
      name={el.name}
      author={el.author}
      type={el.type}
      typeChange={typeChange}
    />
  ));
  const header = COLUMN_TYPES_KEYS.map(key => (
      <td key={key}>{COLUMN_TYPES[key]}</td>
    )
  );
  return (
    <table id="table">
      {isLoading ? <div id="loader"><div id="spinner"></div></div> : null}
      <tbody>
        <tr id="table-header">
          {header}
        </tr>
        {els}
      </tbody>
    </table>
  );
}
export default table;