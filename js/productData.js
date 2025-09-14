// Product Data - Fetched from backend JSON
// All products with category and price information
async function loadProductData() {
    try {
        const response = await fetch('./backend/data/products.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading product data:', error);
        // Fallback data
        return [];
    }
}

// Initialize the product data
let allProductsData = [];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadProductData, allProductsData };
}