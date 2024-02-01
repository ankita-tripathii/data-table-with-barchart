import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../redux/action/action';
import ApiService from '../services/apiServices';

const PAGE_SIZE = 10;
// const TOTAL_ROWS = 100; // Update this based on your requirement

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const dispatch = useDispatch();

   useEffect(() => {
    // Fetch initial data (first page) when the component mounts
    handlePageChange(1);
  }, []); // Empty dependency array ensures it only runs once

  const handlePageChange = async (page) => {
    try {
      const pageSize = PAGE_SIZE; // Use the correct pageSize
      const skip = (page - 1) * pageSize;
      const { paginatedData, total } = await ApiService.fetchPaginatedData(pageSize, skip);

      // Use setData action to update the data in the store
      dispatch(setData(paginatedData));

      // Update the current page
      setCurrentPage(page);
      setTotalPages(Math.ceil(total / pageSize));

    } catch (error) {
      console.error('Error fetching paginated data:', error);
    }
  };


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
