// ========================================
// INDEPENDENCE DAY GIFTS PRODUCTS
// ========================================
// Occasion: Independence Day Gifts
// Active Dates: June 25 - July 4
// Export from backend admin to populate this file
// ========================================

const independencedayProducts = {
    occasion: 'independenceday',
    config: {
        name: "Independence Day Gifts",
        slug: "independenceday",
        description: "Discover amazing independence day gifts for everyone on your list!",
        enabled: true,
        seoTitle: "Independence Day Gifts",
        seoDescription: "Shop the best independence day gifts on Amazon - perfect gifts with fast shipping!",
        lastUpdated: new Date().toISOString()
    },
    products: [
        // Products will be added when you export from backend admin
        // Use Custom Category tab → Select "Independence Day Gifts" → Add Products → Export
    ]
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = independencedayProducts;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.independencedayProducts = independencedayProducts;
}
