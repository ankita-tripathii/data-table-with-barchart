import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
      <div className="d-flex justify-content-center col-lg-11 col-md-11 col-sm-10 col-10">
        <nav>
          <ul className="pagination">
            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? 'active' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => onPageChange(page)}
                  disabled={currentPage === page}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  );
};

export default Pagination;