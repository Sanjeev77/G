// Main JavaScript file for budget pages functionality

// Global variables
let allProducts = [];
let currentProducts = [];
let filteredProducts = [];

// Initialize budget page with specific price range
function initializeBudgetPage(budget) {
    console.log('Initializing budget page for:', budget);

    // Ensure allProductsData is available
    if (typeof allProductsData === 'undefined') {
        console.error('allProductsData is not available');
        displayErrorMessage('Product data failed to load');
        return;
    }

    // Get DOM elements
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('search');

    if (!productsContainer) {
        console.error('Products container not found!');
        displayErrorMessage('Page initialization failed');
        return;
    }

    // Load and filter products
    loadProducts();
    filterAndDisplayProducts(budget);

    // Set up search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
}

// Load products from allProductsData
function loadProducts() {
    console.log('Loading products...');

    // Get all products and ensure they have priceValue
    allProducts = allProductsData.map(product => ({
        ...product,
        priceValue: product.priceValue || parseFloat(product.price) || 0
    }));

    console.log('Loaded products:', allProducts.length);
}

// Initialize category page with specific category
function initializeCategoryPage(category) {
    console.log('Initializing category page for:', category);

    // Debug: Check if allProductsData exists and log its length
    console.log('allProductsData exists:', typeof allProductsData !== 'undefined');
    if (typeof allProductsData !== 'undefined') {
        console.log('Total products in allProductsData:', allProductsData.length);

        // Debug: Count products by category
        const categoryCounts = {};
        allProductsData.forEach(product => {
            categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
        });
        console.log('Products by category:', categoryCounts);
    }

    // Ensure allProductsData is available
    if (typeof allProductsData === 'undefined') {
        console.error('allProductsData is not available');
        displayErrorMessage('Product data failed to load');
        return;
    }

    // Get DOM elements
    const productsContainer = document.getElementById('products-container');
    const searchInput = document.getElementById('search');

    if (!productsContainer) {
        console.error('Products container not found!');
        displayErrorMessage('Page initialization failed');
        return;
    }

    // Load and filter products by category
    loadProducts();
    filterAndDisplayByCategory(category);

    // Set up search functionality
    if (searchInput) {
        searchInput.addEventListener('input', () => handleCategorySearch(category));
    }
}

// Filter and display products by category
function filterAndDisplayByCategory(category) {
    console.log('Filtering products by category:', category);

    // Filter products by category
    currentProducts = allProducts.filter(product =>
        product.category === category
    );

    console.log(`Found ${currentProducts.length} products in ${category} category`);

    // Sort by price (highest to lowest)
    currentProducts.sort((a, b) => b.priceValue - a.priceValue);

    // Display products
    renderProducts(currentProducts);
}

// Handle search within category
function handleCategorySearch(category) {
    const searchInput = document.getElementById('search');
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

    console.log('Category search term:', searchTerm);

    if (searchTerm === '') {
        // If no search term, show all products in category
        filterAndDisplayByCategory(category);
        return;
    }

    // Filter category products by search term
    const categoryProducts = allProducts.filter(product =>
        product.category === category
    );

    const searchResults = categoryProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );

    // Sort by price (highest to lowest)
    searchResults.sort((a, b) => b.priceValue - a.priceValue);

    console.log(`Found ${searchResults.length} search results in ${category}`);
    renderProducts(searchResults);
}

// Filter category by budget (for budget filter buttons)
function filterCategoryByBudget(budget) {
    console.log('Filtering category by budget:', budget);

    // Get current category from URL or page context
    const pathName = window.location.pathname;
    const pageName = pathName.split('/').pop().replace('.html', '');

    // Map page names to categories
    const categoryMap = {
        'appliances': 'appliances',
        'baby-essentials': 'baby',
        'electronics': 'electronics',
        'fashion': 'clothing-shoes-jewelry',
        'beauty': 'beauty',
        'automotive': 'automotive',
        'home-kitchen': 'home-kitchen',
        'health-personal-care': 'health-personal-care',
        'pet-supplies': 'pet-supplies',
        'sports-outdoors': 'sports-outdoors',
        'toys-games': 'toys-games',
        'books': 'books'
    };

    const category = categoryMap[pageName] || pageName;

    // First filter by category
    let categoryProducts = allProducts.filter(product =>
        product.category === category
    );

    // Then filter by budget if not 'all'
    if (budget !== 'all') {
        const budgetRanges = {
            'under-10': { min: 0, max: 10 },
            'under-25': { min: 0, max: 25 },
            'under-50': { min: 0, max: 50 },
            'under-100': { min: 0, max: 100 }
        };

        const range = budgetRanges[budget];
        if (range) {
            categoryProducts = categoryProducts.filter(product =>
                product.priceValue >= range.min && product.priceValue <= range.max
            );
        }
    }

    // Sort by price (highest to lowest)
    categoryProducts.sort((a, b) => b.priceValue - a.priceValue);

    console.log(`Found ${categoryProducts.length} products for ${category} with budget ${budget}`);
    renderProducts(categoryProducts);

    // Update active button
    updateBudgetButtons(budget);
}

// Update budget filter buttons
function updateBudgetButtons(activeBudget) {
    const budgetButtons = document.querySelectorAll('.budget-btn');
    budgetButtons.forEach(button => {
        const buttonBudget = button.getAttribute('data-budget');
        if (buttonBudget === activeBudget) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Filter and display products based on budget
function filterAndDisplayProducts(budget) {
    console.log('Filtering products by budget:', budget);

    if (allProducts.length === 0) {
        loadProducts();
    }

    let filteredProducts = [...allProducts];

    // Apply budget filter
    if (budget !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
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
    filteredProducts.sort((a, b) => b.priceValue - a.priceValue);

    // Store current filtered products
    currentProducts = filteredProducts;

    console.log('Filtered products:', filteredProducts.length);

    // Render the products
    renderProducts(filteredProducts);
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();

    if (searchTerm === '') {
        // Show all current products if search is empty
        renderProducts(currentProducts);
        return;
    }

    // Filter current products by search term
    const searchResults = currentProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
    );

    renderProducts(searchResults);
}

// Render products
function renderProducts(products) {
    console.log('Rendering products:', products.length);

    const productsContainer = document.getElementById('products-container');
    const noResults = document.getElementById('no-results');

    if (!productsContainer) {
        console.error('Products container not found!');
        return;
    }

    if (products.length === 0) {
        console.log('No products to display');
        productsContainer.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }

    if (noResults) noResults.style.display = 'none';

    // Generate product cards HTML
    const productsHTML = products.map(product => createProductCard(product)).join('');
    productsContainer.innerHTML = productsHTML;

    console.log('Successfully rendered', products.length, 'products');
}

// Create product card HTML
function createProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) +
                 (product.rating % 1 >= 0.5 ? '☆' : '') +
                 '☆'.repeat(5 - Math.ceil(product.rating));

    // Handle special offer badge if product has discount info
    const specialOfferBadge = product.discount ?
        `<div class="special-offer-badge">${product.discount} OFF</div>` :
        (product.specialOffer ? `<div class="special-offer-badge">Special Offer</div>` : '');

    // Handle original price display
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
                <div class="product-price">
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

// Handle product card click
function handleProductCardClick(event, affiliateLink) {
    if (event.target.tagName === 'A') {
        return; // Let the link handle its own click
    }
    window.open(affiliateLink, '_blank', 'noopener');
}

// Handle product image click
function handleProductImageClick(event, affiliateLink) {
    event.stopPropagation();
    window.open(affiliateLink, '_blank', 'noopener');
}

// Display error message
function displayErrorMessage(message) {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        productsContainer.innerHTML = `
            <div style="background: #ffebee; color: #c62828; padding: 20px; border-radius: 8px; text-align: center;">
                <h3>Error</h3>
                <p>${message}</p>
                <p>Please try refreshing the page.</p>
            </div>
        `;
    }
}