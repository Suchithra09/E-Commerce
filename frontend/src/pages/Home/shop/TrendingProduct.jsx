import React, { useState } from 'react';

// Sample product data (Replace this with imported data or add directly)
const trendingProducts = [
  {
    "id": 1,
    "name": "Leather Handbag",
    "category": "accessories",
    "description": "Stylish leather handbag with ample storage space.",
    "price": 79.99,
    
    "image": "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "black",
    "rating": 4.5,
    "author":"admin"
  },
  {
    "id": 2,
    "name": "Evening Gown",
    "category": "dress",
    "description": "Elegant evening gown for special occasions.",
    "price": 149.99,
   
    "image": "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "red",
    "rating": 4.0
  },
  {
    "id": 3,
    "name": "Gold Necklace",
    "category": "jewellery",
    "description": "Exquisite gold necklace with intricate design.",
    "price": 199.99,
    "image": "https://images.unsplash.com/photo-1631097969294-c38afba59496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "gold",
    "rating": 4.7
  },
  {
    "id": 4,
    "name": "Matte Lipstick",
    "category": "cosmetics",
    "description": "Long-lasting matte lipstick in various shades.",
    "price": 19.99,
    "image": "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "red",
    "rating": 4.2
  },
  {
    "id": 5,
    "name": "Silk Scarf",
    "category": "accessories",
    "description": "Luxurious silk scarf with vibrant colors.",
    "price": 29.99,
    
    "image": "https://images.unsplash.com/photo-1485527691629-8e370684924c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "blue",
    "rating": 4.3
  },
  {
    "id": 6,
    "name": "Cocktail Dress",
    "category": "dress",
    "description": "Chic cocktail dress for parties and events.",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "black",
    "rating": 4.4
  },
  {
    "id": 7,
    "name": "Diamond Earrings",
    "category": "jewellery",
    "description": "Sparkling diamond earrings that add elegance to any outfit.",
    "price": 299.99,
   
    "image": "https://images.unsplash.com/photo-1587467442586-7bcc51828a10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "silver",
    "rating": 4.8
  },
  {
    "id": 8,
    "name": "Foundation",
    "category": "cosmetics",
    "description": "High-coverage foundation for a flawless finish.",
    "price": 39.99,
    "image": "https://images.unsplash.com/photo-1599733589046-10c005739ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "beige",
    "rating": 4.1
  },
  {
    "id": 9,
    "name": "Sunglasses",
    "category": "accessories",
    "description": "Trendy sunglasses with UV protection.",
    "price": 49.99,
    "image": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "black",
    "rating": 4.6
  },
  {
    "id": 10,
    "name": "Casual Pants",
    "category": "dress",
    "description": "Comfortable maxi dress for casual outings.",
    "price": 59.99,
   
    "image": "https://plus.unsplash.com/premium_photo-1664298355914-bc65d2c9af64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "color": "green",
    "rating": 4.2
  }
] 

  

const TrendingProduct = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="section__container product__container">
      <h2 className="section__header">Trending Products</h2>
      <p className="section__subheader mb-12">
        Discover the Hottest Picks: Elevate your Style with our Curated Collection of Trending Women's Fashion Products.
      </p>
      <div className="product__grid">
        {/* Render visible products dynamically */}
        {trendingProducts.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product__card">
            <img src={product.image} alt={product.name} className="product__image" />
            <h3 className="product__name">{product.name}</h3>
            <p className="product__description">{product.description}</p>
            <div className="product__price">
              <span className="current__price">${product.price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="old__price"> ${product.oldPrice.toFixed(2)}</span>
              )}
            </div>
            <p className="product__rating">Rating: ⭐ {product.rating}</p>
          </div>
        ))}
      </div>
      {visibleProducts < trendingProducts.length && (
        <button onClick={loadMoreProducts} className="load__more">
          Load More
        </button>
      )}
    </section>
  );
};

export default TrendingProduct;