const ApiService = {
  
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
      }));

      return searchData;
    } catch (error) {
      console.error('Error fetching search data:', error);
      throw error;
    }
  },
};

export default ApiService;