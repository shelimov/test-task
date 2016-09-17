import React from 'react';
import './pagination.sass';

const Page = ({active, index, click}) => (
  <span
    className={active ? 'active' : null}
    onClick={() => !active ? 0 : click(index)}
  >
  {index}
  </span>
)

const pagination = ({current, pages, pageChange}) => {
  let pags = [];
  for (let index = 1; index <= pages; index++) {
    let isActive = index == current;
    pags.push(
      <Page
        index={index}
        active={isActive}
        click={pageChange}
      />
    )
  }
  return (
    <div id="pagination">
      {pags}
    </div>
  );
}
export default pagination;