import React, { useState, useEffect } from 'react';
import DataTable from './dataTable';
import Pagination from './pagination';
import ApiService from '../services/apiServices';

const PAGE_SIZE = 10;

const ParentComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const pageSize = PAGE_SIZE;
      const skip = (page - 1) * pageSize;
      const { paginatedData, total } = await ApiService.fetchPaginatedData(pageSize, skip);

      setData(paginatedData);
      setTotalPages(Math.ceil(total / pageSize));
    } catch (error) {
      console.error('Error fetching paginated data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <DataTable data={data} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default ParentComponent;