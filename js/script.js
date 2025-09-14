// Product Data is loaded from productData.js

// Global variables
let currentProducts = [];
let filteredProducts = [];
let currentCategory = 'electronics';
let currentBudget = 'under-10';
let allProducts = [];

// DOM Elements
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const productsContainer = document.getElementById('products-container');
const noResults = document.getElementById('no-results');
const categoryTitle = document.getElementById('category-title');
const categoryDescription = document.getElementById('category-description');
const categorySelect = document.getElementById('category-select');

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
        title: 'Baby',
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

// Initialize the main page
function initializeMainPage() {
    // Load all products from the new data structure
    allProducts = allProductsData;

    setupBudgetTabs();
    setupCategorySelector();

    // Start with electronics category and under $10 budget
    switchCategory('electronics');
    updateBudgetFilter('under-10');

    setupFilters();
}

// Setup budget tabs
function setupBudgetTabs() {
    const budgetButtons = document.querySelectorAll('.budget-btn');

    budgetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const budget = button.getAttribute('data-budget');

            // Update active budget tab
            budgetButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update budget filter
            updateBudgetFilter(budget);
        });
    });
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

    // Apply combined filtering
    applyFiltering();
}

// Apply combined category and budget filtering
function applyFiltering() {
    // Filter products by category
    let categoryFiltered = allProducts.filter(product => product.category === currentCategory);

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

// Update page info based on current filters
function updatePageInfo() {
    const categoryInfo = getCategoryInfo();
    const budgetInfo = getBudgetInfo();

    if (categoryTitle) {
        categoryTitle.textContent = `${categoryInfo.title} ${budgetInfo.title}`;
    }
    if (categoryDescription) {
        categoryDescription.textContent = `${categoryInfo.description} - ${budgetInfo.description}`;
    }
}

// Get category information
function getCategoryInfo() {
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
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating" style="color: #ff9900; margin-bottom: 0.5rem;">
                    ${stars} (${product.rating})
                </div>
                <div class="product-price">${product.price}</div>
                <a href="${product.affiliateLink}" target="_blank" rel="noopener" class="product-btn">
                    View on Amazon
                </a>
            </div>
        </div>
    `;
}

// Render products
function renderProducts(products) {
    if (!productsContainer) return;

    if (products.length === 0) {
        productsContainer.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    productsContainer.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Setup filters for category pages
function setupFilters() {
    if (!searchInput) return;

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filteredProducts = currentProducts.filter(product =>
            product.title.toLowerCase().includes(searchTerm)
        );
        renderProducts(filteredProducts);
    });
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