import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DataTable from './dataTable';
import Pagination from './pagination';
import SearchBar from './searchBar';
import BarChart from './barChart';
import { toggleCheckedRow, initializeCheckedRows } from '../redux/action/action';

const PAGE_SIZE = 10;

const Report = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  const selectedRows = useSelector((state) => state.data.checkedRows);
  const dispatch = useDispatch();

 useEffect(() => {
  
    // Fetch data and initialize checked rows when the component mounts
    fetchData(currentPage);
  }, [currentPage, dispatch]);

  const fetchData = async (page) => {
    try {
      const pageSize = PAGE_SIZE;
      const skip = (page - 1) * pageSize;
      const response = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`);
      const { products, total } = await response.json();

       // Initialize checked rows if not already initialized
      if (selectedRows.length === 0) {
        const initialCheckedRows = products.slice(0, 5).map((product) => product.id);
        dispatch(initializeCheckedRows(initialCheckedRows));
      }

      const paginatedData = products.map((product) => ({
        id: product.id,
        title: product.title,
        brand: product.brand,
        category: product.category,
        rating: product.rating,
        checked: selectedRows.includes(product.id),
      }));

      setData(paginatedData);
      setTotalPages(Math.ceil(total / pageSize));
    } catch (error) {
      console.error('Error fetching paginated data:', error);
    } 
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDataFiltered = (filteredData) => {
    setSearchResults(filteredData);
  };
  
   const handleCheckboxChange = (id) => {
    dispatch(toggleCheckedRow(id));
  };  

  return (
     <div className="container">
      <div className=" mb-4">
        <BarChart data={data} />
      </div>
      <div className="mb-4">
        <SearchBar onDataFiltered={handleDataFiltered} />
      </div>
      <div className="mb-4">
        <DataTable data={searchResults.length > 0 ? searchResults : data} handleCheckboxChange={handleCheckboxChange} />
      </div>
        <div className="mb-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
    </div>
  );
};

export default Report;
