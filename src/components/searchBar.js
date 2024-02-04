import React, { useState, useEffect } from 'react';

const SearchBar = ({ onDataFiltered }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (query) => {
    try {
      if (query.trim() !== '') {
        const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const { products } = await response.json();

        const searchData = products.map((product) => ({
          id: product.id,
          title: product.title,
          brand: product.brand,
          category: product.category,
          rating: product.rating,
          checked: false,
        }));

        setSearchData(searchData);
      }
    } catch (error) {
      console.error('Error fetching search data:', error);
    }
  };

  useEffect(() => {
    const handleEnterKeyPress = (e) => {
      if (e.key === 'Enter') {
        handleSearch(searchTerm);
      }
    };

    document.addEventListener('keydown', handleEnterKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEnterKeyPress);
    };
  }, [searchTerm]);

  useEffect(() => {
    // Communicate search results to the parent component
    onDataFiltered(searchData);
  }, [searchData, onDataFiltered]);

  return (
    <div className="input-group mb-4 col-lg-11 col-md-11 col-sm-11 col-11">
      <input
        type="text"
        className="form-control"
        placeholder="Search Title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
