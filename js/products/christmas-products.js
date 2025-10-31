// ========================================
// CHRISTMAS PRODUCTS
// ========================================
// Occasion: Christmas
// Active Dates: November 1 - December 25
// Export from backend admin to populate this file
// ========================================

const christmasProducts = {
    occasion: 'christmas',
    config: {
        name: "Christmas Gifts",
        slug: "christmas-gifts",
        description: "Spread holiday cheer with festive gifts and Christmas decorations",
        enabled: true,
        seoTitle: "Christmas Gifts - Holiday Presents & Decorations",
        seoDescription: "Shop the best Christmas gifts - holiday presents, stocking stuffers, and festive decorations for family and friends!",
        lastUpdated: new Date().toISOString()
    },
    products: [
        // Products will be added when you export from backend admin
        // Use Custom Category tab → Select "Christmas" → Export
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = christmasProducts;
}

if (typeof window !== 'undefined') {
    window.christmasProducts = christmasProducts;
}
