import React, { useState } from "react";

const Search = () => {
    // Define product data inline
    const products = [
        {
            id: 1,
            name: "Leather Handbag",
            category: "Accessories",
            description: "Stylish leather handbag with ample storage space.",
            price: 79.99,
            
            image: "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format",
            rating: 4.5,
        },
        {
            id: 2,
            name: "Evening Gown",
            category: "Clothing",
            description: "Elegant evening gown for special occasions.",
            price: 149.99,
           
            image: "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=2062&auto=format",
            rating: 4.0,
        },
        {
            id: 3,
            name: "Gold Necklace",
            category: "Jewellery",
            description: "Exquisite gold necklace with intricate design.",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1631097969294-c38afba59496?q=80&w=2070&auto=format",
            rating: 4.7,
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
          },
        // Add more products as needed
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(products);

    // Search function
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = products.filter(
            (product) =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query)
        );

        setFilteredProducts(filtered);
    };

    return (
        <div className="search-page">
            {/* Search Bar */}
            <section className="search-section">
                <h2 className="search-header">Search for Products</h2>
                <input
                    type="text"
                    placeholder="Search by name, category, or description..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />
            </section>

            {/* Search Results */}
            <section className="results-section">
                <h3 className="results-header">
                    {filteredProducts.length > 0
                        ? `Found ${filteredProducts.length} product(s)`
                        : "No products found"}
                </h3>
                <div className="product-grid">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="product-details">
                                <h4 className="product-name">{product.name}</h4>
                                <p className="product-description">
                                    {product.description}
                                </p>
                                <p className="product-category">
                                    Category: {product.category}
                                </p>
                                <p className="product-price">Price: ${product.price}</p>
                                {product.oldPrice && (
                                    <p className="product-old-price">
                                        Old Price: ${product.oldPrice}
                                    </p>
                                )}
                                <p className="product-rating">Rating: {product.rating} ⭐</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Search;
