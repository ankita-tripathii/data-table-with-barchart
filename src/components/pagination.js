import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../redux/action/action';
import ApiService from '../services/apiServices';

const PAGE_SIZE = 10;
const TOTAL_ROWS = 100; // Update this based on your requirement

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TOTAL_ROWS / PAGE_SIZE);
  const dispatch = useDispatch();

  const handlePageChange = async (page) => {
    try {
      const { paginatedData } = await ApiService.fetchPaginatedData(page, PAGE_SIZE);
      dispatch(setData(paginatedData));
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching paginated data:', error);
    }
  };

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    // Fetch initial data (first page) when the component mounts
    handlePageChange(1);
  }, []); // Empty dependency array ensures it only runs once

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
                  onClick={() => handlePageChange(page)}
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
