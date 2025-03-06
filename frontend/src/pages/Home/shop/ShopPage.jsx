import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";

// Product data (sample data)
const productData = [
  {
    id: 1,
    name: "Leather Handbag",
    category: "accessories",
    description: "Stylish leather handbag with ample storage space.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "black",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Evening Gown",
    category: "dress",
    description: "Elegant evening gown for special occasions.",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "red",
    rating: 4.0,
  },
  {
    id: 3,
    name: "Gold Necklace",
    category: "jewellery",
    description: "Exquisite gold necklace with intricate design.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1631097969294-c38afba59496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "gold",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Matte Lipstick",
    category: "cosmetics",
    description: "Long-lasting matte lipstick in various shades.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "red",
    rating: 4.2,
  },
];

// Filters
const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRanges: [
    { label: "All Prices", min: 0, max: Infinity },
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 and above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productData); // All products
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: filters.priceRanges[0].label,
  });

  // Apply filters
  const applyFilters = () => {
    let filteredProducts = productData;

    if (filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === filtersState.category
      );
    }

    if (filtersState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color.toLowerCase() === filtersState.color
      );
    }

    const selectedRange = filters.priceRanges.find(
      (range) => range.label === filtersState.priceRange
    );

    if (selectedRange) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= selectedRange.min && product.price <= selectedRange.max
      );
    }

    setProducts(filteredProducts);
  };

  // Trigger filtering whenever filtersState changes
  useEffect(() => {
    applyFilters();
  }, [filtersState]);

  // Clear filters
  const clearFilter = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: filters.priceRanges[0].label,
    });
  };

  return (
    <div className="shop-page-container flex flex-col md:flex-row gap-8">
      {/* Filters Section */}
      <ShopFiltering
        filters={filters}
        filtersState={filtersState}
        setfiltersState={setFiltersState}
        clearFilter={clearFilter}
      />

      {/* Products Section */}
      <div className="product-section flex-grow grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <h3 className="text-xl font-medium mb-4">Products</h3>
        {products.length > 0 ? (
          <ProductCards products={products} />
        ) : (
          <p>No products match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
