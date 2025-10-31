// ========================================
// THANKSGIVING GIFTS PRODUCTS
// ========================================
// Occasion: Thanksgiving Gifts
// Active Dates: November 15 - November 28
// Export from backend admin to populate this file
// ========================================

const thanksgivingProducts = {
    occasion: 'thanksgiving',
    config: {
        name: "Thanksgiving Gifts",
        slug: "thanksgiving",
        description: "Discover amazing thanksgiving gifts for everyone on your list!",
        enabled: true,
        seoTitle: "Thanksgiving Gifts",
        seoDescription: "Shop the best thanksgiving gifts on Amazon - perfect gifts with fast shipping!",
        lastUpdated: new Date().toISOString()
    },
    products: [
        // Products will be added when you export from backend admin
        // Use Custom Category tab → Select "Thanksgiving Gifts" → Add Products → Export
    ]
};

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = thanksgivingProducts;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.thanksgivingProducts = thanksgivingProducts;
}
