import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation">
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
    </div>
  );
};

export default Pagination;