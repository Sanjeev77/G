// ========================================
// NEW YEAR GIFTS PRODUCTS
// ========================================
// Occasion: New Year Gifts
// Active Dates: December 26 - January 15
// Export from backend admin to populate this file
// ========================================

const newyearProducts = {
    occasion: 'newyear',
    config: {
        name: "New Year Gifts",
        slug: "newyear",
        description: "Discover amazing new year gifts for everyone on your list!",
        enabled: true,
        seoTitle: "New Year Gifts",
        seoDescription: "Shop the best new year gifts on Amazon - perfect gifts with fast shipping!",
        lastUpdated: new Date().toISOString()
    },
    products: [
        // Products will be added when you export from backend admin
        // Use Custom Category tab → Select "New Year Gifts" → Add Products → Export
    ]
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = newyearProducts;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.newyearProducts = newyearProducts;
}
