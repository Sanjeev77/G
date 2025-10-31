// ========================================
// VALENTINE'S DAY PRODUCTS
// ========================================
// Occasion: Valentine's Day
// Active Dates: January 25 - February 14
// Export from backend admin to populate this file
// ========================================

const valentinesProducts = {
    occasion: 'valentines',
    config: {
        name: "Valentine's Day Gifts",
        slug: "valentines-day-gifts",
        description: "Show your love with perfect romantic gifts!",
        enabled: true,
        seoTitle: "Valentine's Day Gifts",
        seoDescription: "Shop the best Valentine's Day gifts - romantic presents for him and her. Find perfect gifts to show your love!",
        lastUpdated: new Date().toISOString()
    },
    products: [
        // Products will be added when you export from backend admin
        // Use Custom Category tab → Select "Valentine's Day" → Export
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = valentinesProducts;
}

if (typeof window !== 'undefined') {
    window.valentinesProducts = valentinesProducts;
}
