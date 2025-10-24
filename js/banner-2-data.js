// Banner 2 - Gift Categories
// These products appear in the Banner 2 section (Gift Category Pages)
// Configuration is now dynamically loaded based on the current page

// Function to get the appropriate configuration for the current page
function getBanner2Config() {
    // Check if gift category configs are loaded
    if (typeof window.getCurrentPageConfig === 'function') {
        return window.getCurrentPageConfig();
    }

    // Fallback to default birthday gifts config if not loaded
    return {
        name: "Birthday Gift Ideas",
        description: "Celebrate special birthdays with unique and memorable gifts for everyone",
        seoTitle: "Birthday Gift Ideas - Unique Birthday Presents | Gift On Budget",
        seoDescription: "Find the perfect birthday gifts for friends, family, and loved ones! Browse unique birthday present ideas for all ages and interests that will make their special day unforgettable.",
        seoKeywords: "birthday gifts, birthday present ideas, unique birthday gifts, birthday gifts for him, birthday gifts for her, birthday gifts for kids, birthday gifts for adults, best birthday presents, birthday gift ideas for friends, special birthday gifts"
    };
}

// Get the configuration for the current page
const banner2Config = getBanner2Config();

const banner2Products = [
    {
        "title": "Belgian Waffle Maker, Double Side Waffle Maker Non Stick Baking Mold Pan with Cold Touch Handle for Snakes Breakfast Desserts",
        "price": "25",
        "rating": 4,
        "affiliateLink": "https://amzn.to/4quXrGO",
        "image": "https://m.media-amazon.com/images/I/61cmeeVAkPS._AC_SL1500_.jpg",
        "category": "banner-2",
        "featured": false,
        "id": 1760717735391
    }
];

// Make data available globally
if (typeof window !== 'undefined') {
    window.banner2Config = banner2Config;
    window.banner2Products = banner2Products;
}

// Export for backend use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { banner2Config, banner2Products };
}