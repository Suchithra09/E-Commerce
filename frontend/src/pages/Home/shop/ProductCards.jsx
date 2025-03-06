import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="product__card">
          <div className="relative">
            {/* Corrected dynamic URL interpolation */}
            <Link to={`/shop/${product._id}`}>
              <img src={product.image} alt={`${product.name} image`} className="w-full" />
            </Link>
            {/* Added hover block styling */}
            <div className="hidden hover:block absolute top-3 right-3">
              <button>
                <i className="ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark"></i>
              </button>
            </div>
          </div>
          {/* Optionally display product details below */}
          <div className="mt-2 text-center">
            <h4 className="font-semibold">{product.name}</h4>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
