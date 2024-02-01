const ApiService = {
  fetchData: async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const { products } = await response.json();

      // Extracting relevant data for demonstration
      const selectedData = products.map((product) => ({
        id: product.id,
        title: product.title,
        brand: product.brand,
        category: product.category,
        rating: product.rating,
        checked: false, // Initially not checked
      }));

      // Initially checking only the first 5 rows
    const initiallyCheckedRows = selectedData.slice(0, 5).map((row) => ({
      ...row,
      checked: true,
    }));

      return selectedData;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },

fetchPaginatedData: async (pageSize, skip) => {
  try {
    const response = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`);
    const { products, total } = await response.json();

    const paginatedData = products.map((product) => ({
      id: product.id,
      title: product.title,
      brand: product.brand,
      category: product.category,
      rating: product.rating,
      checked: false,
    }));

    return { paginatedData, total };
  } catch (error) {
    console.error('Error fetching paginated data:', error);
    throw error;
  }
},

  searchData: async (searchTerm) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      const { products } = await response.json();

      // Extracting relevant data for demonstration
      const searchData = products.map((product) => ({
        id: product.id,
        title: product.title,
        brand: product.brand,
        category: product.category,
        rating: product.rating,
        checked: false, // Initially not checked
      }));

      return searchData;
    } catch (error) {
      console.error('Error fetching search data:', error);
      throw error;
    }
  },
};

export default ApiService;