import React from "react";
import '../../css/All/Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];
  

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumber.map((pageNum) => (
        <li
          key={pageNum}
          className="pagination_item"
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;