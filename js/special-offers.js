// Special Offers Data - Products with special offers/discounts
const specialOffersData = [
    {
        "title": "1400 sqft Halloween Spider Webs Decorations with 150 Extra Fake Spiders, Super Stretchy Cobwebs for Halloween Decor Indoor and Outdoor",
        "price": "5.6",
        "rating": 4,
        "affiliateLink": "https://amzn.to/3KggJiq",
        "image": "https://m.media-amazon.com/images/I/91yK8oNd4pL._AC_SL1500_.jpg",
        "category": "halloween-gifs",
        "featured": false,
        "id": 1758645855627,
        "isCustomCategory": true,
        "priceValue": 5.6
    },
    {
        "title": "DIYASY Bats Wall Decor, 120 Pcs 3D Bat Halloween Decoration Stickers for Home Decor 4 Size Waterproof Black Spooky Bats for Room Decals",
        "price": "10",
        "rating": 4,
        "affiliateLink": "https://amzn.to/4276D9K",
        "image": "https://m.media-amazon.com/images/I/712DvCKKmfL._AC_SL1500_.jpg",
        "category": "halloween-gifs",
        "featured": false,
        "id": 1758645897904,
        "isCustomCategory": true,
        "priceValue": 10
    }
];

// Custom Category Configuration for SEO
const customCategoryConfig = {
    "enabled": true,
    "name": "Halloween Gifs",
    "slug": "halloween-gifs",
    "description": "Amazing holiday deals and seasonal products",
    "seoTitle": "Holiday Specials - Best Holiday Deals & Gifts",
    "seoDescription": "Discover amazing holiday deals and seasonal products. Find the perfect gifts for Christmas, New Year, and holiday celebrations.",
    "lastUpdated": "2025-09-23",
    "isActive": true
};

// Global variables for special offers page
let allSpecialOffers = [];
let currentSpecialOffers = [];
let filteredSpecialOffers = [];

// Initialize special offers page
function initializeSpecialOffersPage() {
    console.log('Initializing special offers page...');

    // Update SEO meta tags if custom config is available
    updateSEOMetaTags();

    // Get DOM elements
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('search');

    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }

    // Load special offers data
    loadSpecialOffers();

    // Set up search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSpecialOffersSearch);
    }

    // Display all special offers initially
    filterAndDisplaySpecialOffers('all');
}

// Load special offers from all available data
function loadSpecialOffers() {
    console.log('Loading special offers...');

    // Start with our special offers data
    allSpecialOffers = [...specialOffersData];

    // If allProductsData is available, add products marked as special offers
    if (typeof allProductsData !== 'undefined') {
        const mainSpecialOffers = allProductsData.filter(product =>
            product.specialOffer || product.featured || product.discount
        );
        allSpecialOffers = [...allSpecialOffers, ...mainSpecialOffers];
    }

    // Ensure all products have priceValue for sorting
    allSpecialOffers.forEach(product => {
        if (!product.priceValue) {
            product.priceValue = parseFloat(product.price) || 0;
        }
    });

    console.log('Loaded special offers:', allSpecialOffers.length);
}

// Update SEO meta tags with custom category configuration
function updateSEOMetaTags() {
    if (typeof customCategoryConfig !== 'undefined' && customCategoryConfig) {
        console.log('Updating SEO meta tags with custom configuration');

        // Update page title
        if (customCategoryConfig.seoTitle) {
            document.title = customCategoryConfig.seoTitle;
        }

        // Update meta description
        if (customCategoryConfig.seoDescription) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', customCategoryConfig.seoDescription);
            }
        }

        // Update Open Graph title
        if (customCategoryConfig.seoTitle) {
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) {
                ogTitle.setAttribute('content', customCategoryConfig.seoTitle);
            }
        }

        // Update Open Graph description
        if (customCategoryConfig.seoDescription) {
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', customCategoryConfig.seoDescription);
            }
        }

        console.log('SEO meta tags updated:', {
            title: customCategoryConfig.seoTitle,
            description: customCategoryConfig.seoDescription
        });
    } else {
        console.log('No custom category configuration found for SEO updates');
    }
}

// Filter and display special offers
function filterAndDisplaySpecialOffers(budget) {
    console.log('Filtering special offers by budget:', budget);

    if (allSpecialOffers.length === 0) {
        loadSpecialOffers();
    }

    let filteredOffers = [...allSpecialOffers];

    // Apply budget filter
    if (budget !== 'all') {
        filteredOffers = filteredOffers.filter(product => {
            switch(budget) {
                case 'under-10':
                    return product.priceValue < 10;
                case 'under-25':
                    return product.priceValue >= 10 && product.priceValue < 25;
                case 'under-50':
                    return product.priceValue >= 25 && product.priceValue < 50;
                case 'under-100':
                    return product.priceValue >= 50 && product.priceValue < 100;
                default:
                    return true;
            }
        });
    }

    // Sort by price (highest to lowest)
    filteredOffers.sort((a, b) => b.priceValue - a.priceValue);

    // Store current filtered offers
    currentSpecialOffers = filteredOffers;
    filteredSpecialOffers = [...filteredOffers];

    console.log('Filtered special offers:', filteredOffers.length);

    // Render the products
    renderSpecialOffers(filteredOffers);
}

// Handle search functionality
function handleSpecialOffersSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();

    if (searchTerm === '') {
        // Show all current special offers if search is empty
        renderSpecialOffers(currentSpecialOffers);
        return;
    }

    // Filter current special offers by search term
    const searchResults = currentSpecialOffers.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );

    renderSpecialOffers(searchResults);
}

// Render special offers products
function renderSpecialOffers(offers) {
    console.log('Rendering special offers:', offers.length);

    const productsContainer = document.getElementById('products-container');
    const noResults = document.getElementById('no-results');

    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }

    if (offers.length === 0) {
        console.log('No special offers to display');
        productsContainer.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';

    // Generate product cards HTML
    const productsHTML = offers.map(product => createSpecialOfferCard(product)).join('');
    productsContainer.innerHTML = productsHTML;

    console.log('Successfully rendered', offers.length, 'special offers');
}

// Create special offer product card
function createSpecialOfferCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) +
                 (product.rating % 1 >= 0.5 ? '☆' : '') +
                 '☆'.repeat(5 - Math.ceil(product.rating));

    // Only show special offer badge if product has discount info or is marked as special offer
    const specialOfferBadge = product.discount ?
        `<div class="special-offer-badge">${product.discount} OFF</div>` :
        (product.specialOffer ? `<div class="special-offer-badge">Special Offer</div>` : '');

    // Only show original price if it exists
    const originalPriceDisplay = product.originalPrice ?
        `<span class="original-price">$${product.originalPrice}</span>` : '';

    // Use appropriate class for price styling
    const priceClass = product.originalPrice ? 'current-price' : 'product-price';

    return `
        <div class="product-card ${specialOfferBadge ? 'special-offer-card' : ''}" data-id="${product.id}" data-affiliate-link="${product.affiliateLink}" onclick="handleProductCardClick(event, '${product.affiliateLink}')" style="cursor: pointer;">
            ${specialOfferBadge}
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy" onclick="handleProductImageClick(event, '${product.affiliateLink}')">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating" style="color: #ff9900; margin-bottom: 0.5rem;">
                    ${stars} (${product.rating})
                </div>
                <div class="${originalPriceDisplay ? 'product-price' : 'product-price'}">
                    ${originalPriceDisplay}
                    <span class="${priceClass}">$${product.price}</span>
                </div>
                <a href="${product.affiliateLink}" target="_blank" rel="noopener" class="product-btn">
                    View on Amazon
                </a>
            </div>
        </div>
    `;
}

// Handle product card click - fallback function if not defined elsewhere
function handleProductCardClick(event, affiliateLink) {
    if (event.target.tagName === 'A') {
        return; // Let the link handle its own click
    }
    window.open(affiliateLink, '_blank', 'noopener');
}

// Handle product image click - fallback function if not defined elsewhere
function handleProductImageClick(event, affiliateLink) {
    event.stopPropagation();
    window.open(affiliateLink, '_blank', 'noopener');
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { specialOffersData, initializeSpecialOffersPage, filterAndDisplaySpecialOffers };
}