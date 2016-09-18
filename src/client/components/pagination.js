import './pagination.sass';
import React from 'react';
import { PAGES_AROUND } from '../constants/other';

const Page = ({active, index, click}) => (
  <span
    className={'page' + (active ? ' active' : '')}
    onClick={() => {
      if (!active)
        click(index);
    }}
  >
  {index}
  </span>
)

const pagination = ({current, pages, pageChange}) => {
  let pags = [];
  const add = index => pags.push(
    <Page
      key={index}
      index={index}
      active={index == current}
      click={pageChange}
    />
  );

  if (current > PAGES_AROUND)
    add(1);
  for (let range = -PAGES_AROUND; range <= PAGES_AROUND; range++) {
    const index = range + current;
    if (index < 1)
      continue;
    if (index > pages)
      break;
    add(index);
  }
  if (current + PAGES_AROUND < pages)
    add(pages);
  
  return (
    <div id="pagination">
      {pags}
    </div>
  );
}
export default pagination;