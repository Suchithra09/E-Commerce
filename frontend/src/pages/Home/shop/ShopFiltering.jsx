import React from 'react';

const ShopFiltering = ({ filters, filtersState, setfiltersState, clearFilter }) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3 className="text-xl font-medium mb-4">Filters</h3>
      
      {/* Filters in a single row */}
      <div className="filters-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Category Filter */}
        <div className="filter-group">
          <h4 className="font-medium text-lg">Category</h4>
          <hr />
          {filters.categories.map((category) => (
            <label key={category} className="capitalize cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filtersState.category === category}
                onChange={(e) =>
                  setfiltersState({ ...filtersState, category: e.target.value })
                }
              />
              <span className="ml-1">{category}</span>
            </label>
          ))}
        </div>

        {/* Color Filter */}
        <div className="filter-group">
          <h4 className="font-medium text-lg">Color</h4>
          <hr />
          {filters.colors.map((color) => (
            <label key={color} className="capitalize cursor-pointer">
              <input
                type="radio"
                name="color"
                value={color}
                checked={filtersState.color === color}
                onChange={(e) =>
                  setfiltersState({ ...filtersState, color: e.target.value })
                }
              />
              <span className="ml-1">{color}</span>
            </label>
          ))}
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <h4 className="font-medium text-lg">Price Range</h4>
          <hr />
          {filters.priceRanges.map((range) => (
            <label key={range.label} className="capitalize cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                value={range.label}
                checked={filtersState.priceRange === range.label}
                onChange={(e) =>
                  setfiltersState({ ...filtersState, priceRange: e.target.value })
                }
              />
              <span className="ml-1">{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        className="mt-4 text-sm font-semibold text-red-500"
        onClick={clearFilter}
      >
        Clear All Filters
      </button>
    </div>
  );
};

export default ShopFiltering;
