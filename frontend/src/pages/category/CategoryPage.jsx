import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from "../../data/product.json"; // Assuming this contains product data
import ProductCards from '../Home/shop/ProductCards'; // Component to display product cards

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const categories = ["accessories", "jewellery", "dress", "cosmetics"]; // List of categories

    useEffect(() => {
        // Filter products based on the category name from the URL
        const filtered = products.filter(
            (product) => product.category.toLowerCase() === categoryName.toLowerCase()
        );
        setFilteredProducts(filtered);
    }, [categoryName]);

    useEffect(() => {
        // Scroll to the top when category changes
        window.scrollTo(0, 0);
    }, [categoryName]);

    // Check if the category is valid
    const isValidCategory = categories.includes(categoryName.toLowerCase());

    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">
                    {isValidCategory ? categoryName : "Category Not Found"}
                </h2>
                {isValidCategory ? (
                    <p className="section__subheader">
                        Explore our exclusive collection of {categoryName} products. Find the perfect items to match your style!
                    </p>
                ) : (
                    <p className="section__subheader">
                        Sorry, the category you're looking for doesn't exist. Please explore our other categories.
                    </p>
                )}
            </section>
            {isValidCategory && (
                <div className="section__container">
                    {filteredProducts.length > 0 ? (
                        <ProductCards products={filteredProducts} />
                    ) : (
                        <p className="no-products-message">No products available in this category.</p>
                    )}
                </div>
            )}
        </>
    );
};

export default CategoryPage;
