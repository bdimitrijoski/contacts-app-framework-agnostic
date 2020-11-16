import React from 'react';

export interface ContactsPaginationProps {
  totalRows: number;
  currentPage: number;
  onPageChanged: (pageNum: number) => void;
}

export const ContactsPagination: React.FC<ContactsPaginationProps> = ({totalRows, currentPage = 1, onPageChanged})=>{

  const getPagination = ()=>{
    const pages = [];
    const total = totalRows / 10;
    for(let i=1; i<=total; i++){
      pages.push(
      <li key={i} className={i== currentPage ? 'active':'' } >
        <a href="#" onClick={(e)=>{e.preventDefault(); onPageChanged(i); }} >{i}</a>
      </li>)
    }
    return pages;
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {getPagination()}
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
