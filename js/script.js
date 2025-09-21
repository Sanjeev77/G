// Product Data is loaded from productData.js

// Global variables
let currentProducts = [];
let filteredProducts = [];
let currentCategory = 'all';
let currentBudget = 'under-10';
let allProducts = [];

// DOM Elements (will be initialized after DOM loads)
let searchInput;
let sortSelect;
let productsContainer;
let noResults;
let categoryTitle;
let categoryDescription;
let categorySelect;

// Category information
const categoryInfo = {
    // Budget categories
    'under-10': {
        title: 'Best Gifts Under $10',
        description: 'Amazing finds that won\'t break the bank. Perfect for stocking stuffers and thoughtful surprises.'
    },
    'under-25': {
        title: 'Best Gifts Under $25',
        description: 'Quality gifts at an affordable price. Perfect balance of value and thoughtfulness for any occasion.'
    },
    'under-50': {
        title: 'Best Gifts Under $50',
        description: 'Thoughtful gifts with great value. Ideal for birthdays, holidays, and showing someone you care.'
    },
    'under-100': {
        title: 'Best Gifts Under $100',
        description: 'Premium gifts that make a lasting impression. Perfect for milestone celebrations and important occasions.'
    },
    // Product categories
    'appliances': {
        title: 'Appliances',
        description: 'Essential home appliances to make your daily life easier and more convenient.'
    },
    'arts-crafts-sewing': {
        title: 'Arts, Crafts & Sewing',
        description: 'Creative supplies and tools for artists, crafters, and sewing enthusiasts.'
    },
    'automotive': {
        title: 'Automotive',
        description: 'Car accessories, tools, and parts to keep your vehicle running smoothly.'
    },
    'baby': {
        title: 'Baby Essentials',
        description: 'Everything you need for your little one - from feeding to playtime.'
    },
    'beauty': {
        title: 'Beauty',
        description: 'Skincare, makeup, and beauty tools for your self-care routine.'
    },
    'books': {
        title: 'Books',
        description: 'Discover your next great read across all genres and interests.'
    },
    'collectibles-fine-arts': {
        title: 'Collectibles & Fine Arts',
        description: 'Unique collectibles and fine art pieces for enthusiasts and collectors.'
    },
    'electronics': {
        title: 'Electronics',
        description: 'Discover the latest in technology and electronic gadgets for every need.'
    },
    'clothing-shoes-jewelry': {
        title: 'Clothing, Shoes & Jewelry',
        description: 'Fashion essentials, footwear, and accessories to complete your style.'
    },
    'clothing-related': {
        title: 'Clothing Related (Baby / Kids / Men / Women)',
        description: 'Clothing and accessories for the whole family, from babies to adults.'
    },
    'gift-cards': {
        title: 'Gift Cards',
        description: 'Perfect gifts for any occasion - let them choose what they want.'
    },
    'grocery-gourmet-food': {
        title: 'Grocery & Gourmet Food',
        description: 'Quality foods, snacks, and gourmet ingredients for your kitchen.'
    },
    'handmade': {
        title: 'Handmade',
        description: 'Unique, handcrafted items made with care by skilled artisans.'
    },
    'health-personal-care': {
        title: 'Health & Personal Care',
        description: 'Products to support your health, wellness, and personal care needs.'
    },
    'home-kitchen': {
        title: 'Home & Kitchen',
        description: 'Everything you need to create a comfortable and functional home.'
    },
    'industrial-scientific': {
        title: 'Industrial & Scientific',
        description: 'Professional tools and equipment for industrial and scientific applications.'
    },
    'kindle-store': {
        title: 'Kindle Store',
        description: 'Digital books and reading accessories for your Kindle device.'
    },
    'patio-lawn-garden': {
        title: 'Patio, Lawn & Garden',
        description: 'Outdoor living essentials and gardening supplies for your space.'
    },
    'luggage-travel-gear': {
        title: 'Luggage & Travel Gear',
        description: 'Travel essentials and luggage for your next adventure.'
    },
    'magazine-subscriptions': {
        title: 'Magazine Subscriptions',
        description: 'Stay informed and entertained with magazine subscriptions.'
    },
    'apps-games': {
        title: 'Apps & Games',
        description: 'Digital entertainment and productivity apps for all devices.'
    },
    'movies-tv': {
        title: 'Movies & TV',
        description: 'Entertainment content and accessories for movie and TV lovers.'
    },
    'digital-music-cds-vinyl': {
        title: 'Digital Music / CDs & Vinyl',
        description: 'Music in all formats - from digital downloads to vintage vinyl.'
    },
    'musical-instruments': {
        title: 'Musical Instruments',
        description: 'Instruments and accessories for musicians of all skill levels.'
    },
    'office-products': {
        title: 'Office Products',
        description: 'Professional office supplies and equipment for productivity.'
    },
    'computers': {
        title: 'Computers',
        description: 'Computing devices, accessories, and components for work and play.'
    },
    'pet-supplies': {
        title: 'Pet Supplies',
        description: 'Everything your furry, feathered, or finned friends need.'
    },
    'sports-outdoors': {
        title: 'Sports & Outdoors',
        description: 'Gear and equipment for sports, fitness, and outdoor adventures.'
    },
    'tools-home-improvement': {
        title: 'Tools & Home Improvement',
        description: 'Tools and supplies for home improvement and DIY projects.'
    },
    'toys-games': {
        title: 'Toys & Games',
        description: 'Fun and educational toys and games for children of all ages.'
    },
    'video-games': {
        title: 'Video Games',
        description: 'Games, consoles, and accessories for gaming enthusiasts.'
    },
    'cell-phones-accessories': {
        title: 'Cell Phones & Accessories',
        description: 'Mobile devices, cases, chargers, and accessories for staying connected.'
    }
};

// Initialize budget page
function initializeBudgetPage(budget) {
    // Initialize DOM elements
    searchInput = document.getElementById('search');
    productsContainer = document.getElementById('products-container');
    noResults = document.getElementById('no-results');

    // Load all products from the data structure
    allProducts = allProductsData;

    // Set current budget
    currentBudget = budget;
    currentCategory = 'all'; // Show all categories for budget page

    // Get filtered products from all categories by budget
    const filteredProducts = filterAllCategoriesByBudget(budget);

    // Update current products
    currentProducts = filteredProducts;

    // Render products
    renderProducts(filteredProducts);

    // Setup filters
    setupFilters();
}

// Initialize category page
function initializeCategoryPage(category) {
    // Initialize DOM elements
    searchInput = document.getElementById('search');
    productsContainer = document.getElementById('products-container');
    noResults = document.getElementById('no-results');

    // Load all products from the data structure
    allProducts = allProductsData;

    // Set current category
    currentCategory = category;
    currentBudget = 'all'; // Show all price ranges for category page

    // Get products for this category sorted by price
    const categoryProducts = allProducts.filter(product => product.category === category);
    categoryProducts.sort((a, b) => b.priceValue - a.priceValue);

    // Update current products
    currentProducts = categoryProducts;

    // Render products
    renderProducts(categoryProducts);

    // Setup filters
    setupFilters();
}

// Initialize the main page
function initializeMainPage() {
    // Initialize DOM elements
    searchInput = document.getElementById('search');
    sortSelect = document.getElementById('sort');
    productsContainer = document.getElementById('products-container');
    noResults = document.getElementById('no-results');
    categoryTitle = document.getElementById('category-title');
    categoryDescription = document.getElementById('category-description');
    categorySelect = document.getElementById('category-select');

    // Load all products from the new data structure
    allProducts = allProductsData;

    setupCategorySelector();

    // Check if URL has parameters first, otherwise use saved state or defaults
    const urlProcessed = initializeFromURL();

    if (!urlProcessed) {
        // On the main homepage, don't show any products initially
        // Just show the gift cards for selection
        hideProductsOnMainPage();
    }

    setupFilters();
}


// Setup category selector
function setupCategorySelector() {
    if (!categorySelect) return;

    categorySelect.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;

        // Switch to the selected category
        switchCategory(selectedCategory);
    });
}

// Switch to a different category
function switchCategory(category) {
    currentCategory = category;

    // Save to localStorage
    localStorage.setItem('currentCategory', category);

    // Update category selector
    if (categorySelect) {
        categorySelect.value = category;
    }

    // Apply combined filtering
    applyFiltering();
}

// Update budget filter
function updateBudgetFilter(budget) {
    currentBudget = budget;

    // Save to localStorage
    localStorage.setItem('currentBudget', budget);

    // Apply combined filtering
    applyFiltering();
}

// Apply combined category and budget filtering
function applyFiltering() {
    // Filter products by category (if not "all")
    let categoryFiltered = currentCategory === 'all' ?
        allProducts :
        allProducts.filter(product => product.category === currentCategory);

    // Then filter by budget
    let budgetFiltered = categoryFiltered.filter(product => {
        switch(currentBudget) {
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

    currentProducts = budgetFiltered;
    filteredProducts = [...currentProducts];

    // Update page title and description
    updatePageInfo();

    // Clear search
    if (searchInput) searchInput.value = '';

    // Render products
    renderProducts(filteredProducts);
}

// Filter products from ALL categories by budget and sort by price (highest to lowest)
function filterAllCategoriesByBudget(budget) {
    let budgetFiltered = allProducts.filter(product => {
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

    // Sort by price - highest to lowest
    budgetFiltered.sort((a, b) => b.priceValue - a.priceValue);

    return budgetFiltered;
}

// Update page info based on current filters
function updatePageInfo() {
    // No category info to update - showing only products
}

// Get category information
function getCategoryInfo() {
    if (currentCategory === 'all') {
        return { title: 'All Products', description: 'Browse our complete selection of curated products' };
    }
    return categoryInfo[currentCategory] || { title: 'Products', description: 'Browse our selection' };
}

// Get budget information
function getBudgetInfo() {
    const budgetInfoMap = {
        'under-10': { title: 'Under $10', description: 'Budget-friendly options' },
        'under-25': { title: '$10 - $25', description: 'Great value picks' },
        'under-50': { title: '$25 - $50', description: 'Premium quality' },
        'under-100': { title: '$50 - $100', description: 'Top-tier products' }
    };
    return budgetInfoMap[currentBudget] || { title: '', description: '' };
}


// Create product card HTML
function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) +
                 (product.rating % 1 >= 0.5 ? '☆' : '') +
                 '☆'.repeat(5 - Math.ceil(product.rating));

    return `
        <div class="product-card" data-id="${product.id}" data-affiliate-link="${product.affiliateLink}" onclick="handleProductCardClick(event, '${product.affiliateLink}')" style="cursor: pointer;">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy" onclick="handleProductImageClick(event, '${product.affiliateLink}')">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating" style="color: #ff9900; margin-bottom: 0.5rem;">
                    ${stars} (${product.rating})
                </div>
                <div class="product-price">$${product.price}</div>
                <a href="${product.affiliateLink}" target="_blank" rel="noopener" class="product-btn">
                    View on Amazon
                </a>
            </div>
        </div>
    `;
}

// Render products
function renderProducts(products) {
    console.log('renderProducts called with:', products.length, 'products');
    console.log('productsContainer:', productsContainer);

    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }

    if (products.length === 0) {
        console.log('No products to display');
        productsContainer.innerHTML = '<div style="background: orange; color: white; padding: 20px; text-align: center;">No products found for this filter.</div>';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    console.log('Rendering', products.length, 'products');
    productsContainer.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    const productCards = products.map(product => createProductCard(product)).join('');
    console.log('Generated HTML length:', productCards.length);
    productsContainer.innerHTML = productCards;
}

// Setup filters for category pages
function setupFilters() {
    if (!searchInput) return;

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm === '') {
            // If search is empty, show current category/budget products
            hideSearchSuggestions();
            applyFiltering();
            return;
        }

        // Show search suggestions after just 1 character
        if (searchTerm.length >= 1) {
            showSearchSuggestions(searchTerm);
        }
    });

    // Search button functionality
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            performGlobalSearch();
        });
    }

    // Enter key functionality for search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performGlobalSearch();
        }
    });

    // Close suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            hideSearchSuggestions();
        }
    });
}

// Perform global search across all products
function performGlobalSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === '') {
        applyFiltering();
        return;
    }

    // Start with category filtering
    let categoryFiltered = currentCategory === 'all' ?
        allProducts :
        allProducts.filter(product => product.category === currentCategory);

    // Apply budget filtering if we have a current budget set
    if (currentBudget && currentBudget !== 'all') {
        categoryFiltered = categoryFiltered.filter(product => {
            switch(currentBudget) {
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

    // Now search within the filtered products
    const searchResults = categoryFiltered.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );

    if (searchResults.length > 0) {
        // Show search results sorted by price (highest to lowest)
        searchResults.sort((a, b) => b.priceValue - a.priceValue);
        filteredProducts = searchResults;
        renderProducts(filteredProducts);
    } else {
        // Show no results
        filteredProducts = [];
        renderProducts(filteredProducts);
    }

    hideSearchSuggestions();
}

// Get appropriate budget section for a product
function getBudgetForProduct(product) {
    if (product.priceValue < 10) return 'under-10';
    if (product.priceValue < 25) return 'under-25';
    if (product.priceValue < 50) return 'under-50';
    return 'under-100';
}


// Track clicks for analytics (optional)
function trackProductClick(productId, category) {
    // You can integrate with Google Analytics or other tracking services here
    console.log(`Product clicked: ${productId} in category: ${category}`);

    // Example Google Analytics tracking (uncomment if you have GA setup)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'product_click', {
    //         'product_id': productId,
    //         'category': category
    //     });
    // }
}

// Add click tracking to product links
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-btn')) {
        const productCard = e.target.closest('.product-card');
        if (productCard) {
            const productId = productCard.getAttribute('data-id');
            trackProductClick(productId, currentCategory);
        }
    }
});


// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main page functionality
    initializeMainPage();

    // Check for hash to set active category
    const hash = window.location.hash.replace('#', '');
    if (hash && productData[hash]) {
        switchCategory(hash);
    }
});

// Lazy loading for images (performance optimization)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                imageObserver.unobserve(img);
            }
        });
    });

    // Observe images as they're added to the DOM
    const observeImages = () => {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    };

    // Initial observation
    setTimeout(observeImages, 100);
}

// Image preview functionality
function showImagePreview(imageSrc, title) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('image-preview-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-preview-modal';
        modal.className = 'image-preview-modal';
        modal.innerHTML = `
            <div class="image-preview-overlay" onclick="closeImagePreview()">
                <div class="image-preview-container" onclick="event.stopPropagation()">
                    <button class="image-preview-close" onclick="closeImagePreview()">×</button>
                    <img class="image-preview-img" src="" alt="">
                    <div class="image-preview-title"></div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Update modal content
    const img = modal.querySelector('.image-preview-img');
    const titleEl = modal.querySelector('.image-preview-title');

    img.src = imageSrc;
    img.alt = title;
    titleEl.textContent = title;

    // Force proper sizing with inline styles - remove all constraints
    const container = modal.querySelector('.image-preview-container');
    const overlay = modal.querySelector('.image-preview-overlay');

    // Remove all size constraints from container and overlay
    overlay.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background: rgba(0, 0, 0, 0.9) !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        z-index: 10000 !important;
        padding: 60px 20px !important;
        box-sizing: border-box !important;
    `;

    container.style.cssText = `
        position: relative !important;
        max-width: calc(100vw - 40px) !important;
        max-height: calc(100vh - 120px) !important;
        width: auto !important;
        height: auto !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    `;

    img.style.cssText = `
        max-width: calc(100vw - 40px) !important;
        max-height: calc(100vh - 120px) !important;
        width: auto !important;
        height: auto !important;
        object-fit: contain !important;
        display: block !important;
        border-radius: 8px !important;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
    `;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeImagePreview() {
    const modal = document.getElementById('image-preview-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImagePreview();
    }
});

// Handle product card click
function handleProductCardClick(event, affiliateLink) {
    // Don't trigger if clicking on the "View on Amazon" button
    if (event.target.classList.contains('product-btn') || event.target.closest('.product-btn')) {
        return;
    }

    // Open Amazon product page in new tab
    window.open(affiliateLink, '_blank', 'noopener');
}

// Handle product image click
function handleProductImageClick(event, affiliateLink) {
    // Prevent event bubbling to card click handler
    event.stopPropagation();

    // Open Amazon product page in new tab
    window.open(affiliateLink, '_blank', 'noopener');
}

// Show search suggestions
function showSearchSuggestions(searchTerm) {
    // Start with category filtering
    let categoryFiltered = currentCategory === 'all' ?
        allProducts :
        allProducts.filter(product => product.category === currentCategory);

    // Apply budget filtering if we have a current budget set
    if (currentBudget && currentBudget !== 'all') {
        categoryFiltered = categoryFiltered.filter(product => {
            switch(currentBudget) {
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

    const suggestions = categoryFiltered
        .filter(product => product.title.toLowerCase().includes(searchTerm))
        .slice(0, 8); // Limit to 8 suggestions

    if (suggestions.length === 0) {
        hideSearchSuggestions();
        return;
    }

    // Create or get suggestions container
    let suggestionsContainer = document.getElementById('search-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.id = 'search-suggestions';
        suggestionsContainer.className = 'search-suggestions';

        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
            searchContainer.appendChild(suggestionsContainer);
        } else {
            return;
        }
    }

    // Build suggestions HTML with enhanced preview
    const suggestionsHTML = suggestions.map(product => {
        const budget = getBudgetForProduct(product);
        const budgetText = budget.replace('-', ' ').replace('under', 'Under $');
        const categoryText = getCategoryDisplayName(product.category);
        const stars = '★'.repeat(Math.floor(product.rating)) +
                     (product.rating % 1 >= 0.5 ? '☆' : '') +
                     '☆'.repeat(5 - Math.ceil(product.rating));

        return `
            <div class="search-suggestion enhanced-preview" onclick="selectSearchSuggestion('${product.id}', '${budget}')">
                <div class="suggestion-image-container">
                    <img src="${product.image}" alt="${product.title}" class="suggestion-image">
                    <div class="suggestion-quick-view" onclick="event.stopPropagation(); window.open('${product.affiliateLink}', '_blank', 'noopener');">
                        <i class="fas fa-external-link-alt"></i>
                    </div>
                </div>
                <div class="suggestion-content">
                    <div class="suggestion-header">
                        <div class="suggestion-title">${highlightSearchTerm(product.title, searchTerm)}</div>
                        <div class="suggestion-rating">
                            <span class="rating-stars">${stars}</span>
                            <span class="rating-value">(${product.rating})</span>
                        </div>
                    </div>
                    <div class="suggestion-details">
                        <div class="suggestion-category">${categoryText}</div>
                        <div class="suggestion-meta">
                            <span class="suggestion-price">$${product.price}</span>
                            <span class="suggestion-budget">${budgetText}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    suggestionsContainer.innerHTML = suggestionsHTML;
    suggestionsContainer.style.display = 'block';
}

// Hide search suggestions
function hideSearchSuggestions() {
    const suggestionsContainer = document.getElementById('search-suggestions');
    if (suggestionsContainer) {
        suggestionsContainer.style.display = 'none';
    }
}

// Highlight search term in suggestion
function highlightSearchTerm(text, searchTerm) {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Get category display name
function getCategoryDisplayName(category) {
    const categoryNames = {
        'appliances': 'Appliances',
        'arts-crafts-sewing': 'Arts & Crafts',
        'automotive': 'Automotive',
        'baby': 'Baby Essentials',
        'beauty': 'Beauty',
        'books': 'Books',
        'collectibles-fine-arts': 'Collectibles',
        'electronics': 'Electronics',
        'clothing-shoes-jewelry': 'Fashion',
        'clothing-related': 'Clothing',
        'gift-cards': 'Gift Cards',
        'grocery-gourmet-food': 'Food & Grocery',
        'handmade': 'Handmade',
        'health-personal-care': 'Health & Care',
        'home-kitchen': 'Home & Kitchen',
        'industrial-scientific': 'Industrial',
        'kindle-store': 'Kindle Store',
        'patio-lawn-garden': 'Garden',
        'luggage-travel-gear': 'Travel',
        'magazine-subscriptions': 'Magazines',
        'apps-games': 'Apps & Games',
        'movies-tv': 'Movies & TV',
        'digital-music': 'Music',
        'musical-instruments': 'Instruments',
        'office-products': 'Office',
        'computers': 'Computers',
        'pet-supplies': 'Pet Supplies',
        'sports-outdoors': 'Sports',
        'tools-home-improvement': 'Tools',
        'toys-games': 'Toys & Games',
        'video-games': 'Video Games',
        'cell-phones-accessories': 'Mobile'
    };
    return categoryNames[category] || 'Products';
}

// Select a search suggestion
function selectSearchSuggestion(productId, budget) {
    // Find the product
    const product = allProducts.find(p => p.id == productId);
    if (product) {
        // Open the product's Amazon page directly
        window.open(product.affiliateLink, '_blank', 'noopener');
    }

    hideSearchSuggestions();
}

// Handle gift card clicks
function handleGiftCardClick(budget) {
    // Create URL with budget parameter
    const currentUrl = window.location.origin + window.location.pathname;
    const newUrl = `${currentUrl}?budget=${budget}&category=all`;

    // Open in new tab
    window.open(newUrl, '_blank');
}

// Handle category card clicks
function handleCategoryCardClick(category) {
    // Create URL with category parameter
    const currentUrl = window.location.origin + window.location.pathname;
    const newUrl = `${currentUrl}?category=${category}`;

    // Open in new tab
    window.open(newUrl, '_blank');
}

// Initialize page with URL parameters if present
function initializeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const budgetParam = urlParams.get('budget');
    const categoryParam = urlParams.get('category');

    if (budgetParam && categoryParam) {
        // Hide the gift cards and categories sections since this is a filtered view
        const giftCardsSection = document.querySelector('.gift-cards-section');
        const categoriesSection = document.querySelector('.categories-section');
        if (giftCardsSection) {
            giftCardsSection.style.display = 'none';
        }
        if (categoriesSection) {
            categoriesSection.style.display = 'none';
        }

        // Show products section for filtered view
        const productsSection = document.querySelector('.products-section');
        if (productsSection) {
            productsSection.style.display = 'block';
        }

        // Update hero section to show current filter
        updateHeroForFilteredView(budgetParam);

        // Set category to "all" to show products from all categories
        currentCategory = categoryParam;
        currentBudget = budgetParam;

        // Save to localStorage
        localStorage.setItem('currentCategory', categoryParam);
        localStorage.setItem('currentBudget', budgetParam);

        // Update category selector to show "All"
        if (categorySelect) {
            categorySelect.value = categoryParam;
        }

        // Get filtered and sorted products from all categories
        const filteredProducts = filterAllCategoriesByBudget(budgetParam);

        // Update current products
        currentProducts = filteredProducts;

        // Clear search
        if (searchInput) searchInput.value = '';

        // Render products
        renderProducts(filteredProducts);

        return true; // Indicates URL params were processed
    } else if (categoryParam && !budgetParam) {
        // Handle category-only URLs
        const giftCardsSection = document.querySelector('.gift-cards-section');
        const categoriesSection = document.querySelector('.categories-section');
        if (giftCardsSection) {
            giftCardsSection.style.display = 'none';
        }
        if (categoriesSection) {
            categoriesSection.style.display = 'none';
        }

        // Show products section for filtered view
        const productsSection = document.querySelector('.products-section');
        if (productsSection) {
            productsSection.style.display = 'block';
        }

        // Update hero section for category view
        updateHeroForCategoryView(categoryParam);

        // Add budget filter tabs for category view
        addBudgetFilterTabs();

        // Set category
        currentCategory = categoryParam;
        currentBudget = 'all'; // Show all price ranges

        // Save to localStorage
        localStorage.setItem('currentCategory', categoryParam);

        // Update category selector
        if (categorySelect) {
            categorySelect.value = categoryParam;
        }

        // Get products for this category sorted by price
        const categoryProducts = allProducts.filter(product => product.category === categoryParam);
        categoryProducts.sort((a, b) => b.priceValue - a.priceValue);

        // Update current products
        currentProducts = categoryProducts;

        // Clear search
        if (searchInput) searchInput.value = '';

        // Render products
        renderProducts(categoryProducts);

        return true; // Indicates URL params were processed
    }

    return false; // No URL params found
}

// Update hero section for filtered view
function updateHeroForFilteredView(budget) {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroTitle && heroSubtitle) {
        const budgetText = getBudgetDisplayText(budget);
        heroTitle.textContent = `${budgetText} Gift Ideas`;
        heroSubtitle.textContent = `Discover amazing gift options ${budgetText.toLowerCase()}, sorted by price from highest to lowest.`;
    }
}

// Update hero section for category view
function updateHeroForCategoryView(category) {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroTitle && heroSubtitle) {
        const categoryText = getCategoryDisplayName(category);
        heroTitle.textContent = `${categoryText} Products`;
        heroSubtitle.textContent = `Browse our complete ${categoryText.toLowerCase()} collection, sorted by price from highest to lowest.`;
    }
}

// Get display text for budget
function getBudgetDisplayText(budget) {
    const budgetMap = {
        'under-10': 'Under $10',
        'under-25': 'Under $25',
        'under-50': 'Under $50',
        'under-100': 'Under $100'
    };
    return budgetMap[budget] || 'Budget';
}

// Hide products section on main page
function hideProductsOnMainPage() {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.style.display = 'none';
    }

    // Update hero section for main page
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroTitle && heroSubtitle) {
        heroTitle.textContent = 'Find the Perfect Gift';
        heroSubtitle.textContent = 'Choose your budget below to discover curated gift ideas for every occasion!';
    }
}

// Add budget filter tabs for category pages
function addBudgetFilterTabs() {
    // Check if budget tabs already exist
    if (document.querySelector('.budget-filter-tabs')) {
        return;
    }

    // Create budget tabs section
    const budgetTabsHTML = `
        <section class="budget-filter-tabs">
            <div class="container">
                <div class="budget-navigation">
                    <button class="budget-btn active" data-budget="all" onclick="filterCategoryByBudget('all')">
                        <i class="fas fa-globe"></i>
                        <span>All Prices</span>
                    </button>
                    <button class="budget-btn" data-budget="under-10" onclick="filterCategoryByBudget('under-10')">
                        <i class="fas fa-dollar-sign"></i>
                        <span>Under $10</span>
                    </button>
                    <button class="budget-btn" data-budget="under-25" onclick="filterCategoryByBudget('under-25')">
                        <i class="fas fa-gem"></i>
                        <span>Under $25</span>
                    </button>
                    <button class="budget-btn" data-budget="under-50" onclick="filterCategoryByBudget('under-50')">
                        <i class="fas fa-heart"></i>
                        <span>Under $50</span>
                    </button>
                    <button class="budget-btn" data-budget="under-100" onclick="filterCategoryByBudget('under-100')">
                        <i class="fas fa-star"></i>
                        <span>Under $100</span>
                    </button>
                </div>
            </div>
        </section>
    `;

    // Insert budget tabs before products section
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        productsSection.insertAdjacentHTML('beforebegin', budgetTabsHTML);
    }
}

// Filter category products by budget
function filterCategoryByBudget(budget) {
    // Update active budget tab
    const budgetButtons = document.querySelectorAll('.budget-btn');
    budgetButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-budget') === budget) {
            btn.classList.add('active');
        }
    });

    // Update current budget
    currentBudget = budget;

    // Get products for current category
    let categoryProducts = allProducts.filter(product => product.category === currentCategory);

    // Apply budget filter if not "all"
    if (budget !== 'all') {
        categoryProducts = categoryProducts.filter(product => {
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
    categoryProducts.sort((a, b) => b.priceValue - a.priceValue);

    // Update current products
    currentProducts = categoryProducts;

    // Render products
    renderProducts(categoryProducts);
}