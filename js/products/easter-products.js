// ========================================
// EASTER GIFTS PRODUCTS
// ========================================
// Occasion: Easter Gifts
// Active Dates: March 20 - April 20
// Export from backend admin to populate this file
// ========================================

const easterProducts = {
    occasion: 'easter',
    config: {
        name: "Easter Gifts",
        slug: "easter",
        description: "Discover amazing easter gifts for everyone on your list!",
        enabled: true,
        seoTitle: "Easter Gifts",
        seoDescription: "Shop the best easter gifts on Amazon - perfect gifts with fast shipping!",
        lastUpdated: new Date().toISOString()
    },
    products: [
        // Products will be added when you export from backend admin
        // Use Custom Category tab → Select "Easter Gifts" → Add Products → Export
    ]
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = easterProducts;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.easterProducts = easterProducts;
}
