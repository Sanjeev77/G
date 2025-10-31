// Category Page Functionality
// This file handles product display for category-specific pages (e.g., housewarming-gifts, anniversary-gifts, etc.)

let allCategoryProducts = [];
let currentCategoryProducts = [];

// Initialize category page
function initializeCategoryPage() {
    console.log('Initializing category page...');

    // Get the current page's category from URL
    const pathname = window.location.pathname;
    const filename = pathname.split('/').pop().replace('.html', '');
    const categorySlug = filename; // e.g., "housewarming-gifts"

    console.log('Category slug:', categorySlug);

    // Update SEO meta tags from configuration
    updateCategorySEOMetaTags(categorySlug);

    // Check if productData is available
    if (typeof allProductsData === 'undefined') {
        console.error('allProductsData is not available');
        displayErrorMessage('Product data failed to load');
        return;
    }

    // Load products for this category
    loadCategoryProducts(categorySlug);

    // Display initial products (all)
    filterCategoryByBudget('all');

    // Set up search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', handleCategorySearch);
    }
}

// Update SEO meta tags from configuration
function updateCategorySEOMetaTags(categorySlug) {
    const config = window.giftCategoryConfigs ? window.giftCategoryConfigs[categorySlug] : null;

    if (!config) {
        console.warn('Category config not found for:', categorySlug);
        return;
    }

    console.log('Updating SEO with config:', config);

    // Update page title
    if (config.seoTitle) {
        document.title = config.seoTitle;
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && config.seoDescription) {
        metaDesc.setAttribute('content', config.seoDescription);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && config.seoKeywords) {
        metaKeywords.setAttribute('content', config.seoKeywords);
    }

    // Update page header elements
    const categoryNameElement = document.getElementById('category-name');
    if (categoryNameElement && config.name) {
        categoryNameElement.textContent = config.name;
    }

    const pageDescElement = document.getElementById('page-description');
    if (pageDescElement && config.description) {
        pageDescElement.textContent = config.description;
    }

    const breadcrumbTitle = document.getElementById('breadcrumb-title');
    if (breadcrumbTitle && config.name) {
        breadcrumbTitle.textContent = config.name;
    }
}

// Load products for a specific category
function loadCategoryProducts(categorySlug) {
    console.log('Loading products for category:', categorySlug);

    // Special case: "gift-ideas-for-her" uses banner1Products (category: "banner-1")
    if (categorySlug === 'gift-ideas-for-her') {
        if (typeof window.banner1Products !== 'undefined' && window.banner1Products) {
            console.log('Loading banner1Products for Gift Ideas for Her:', window.banner1Products.length);
            allCategoryProducts = [...window.banner1Products];
        } else {
            console.warn('banner1Products not available - make sure banner-1-data.js is loaded');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Valentine's Day
    else if (categorySlug === 'valentines-day-gifts') {
        if (typeof window.valentinesProducts !== 'undefined' && window.valentinesProducts && window.valentinesProducts.products) {
            console.log('Loading valentinesProducts:', window.valentinesProducts.products.length);
            allCategoryProducts = [...window.valentinesProducts.products];
        } else {
            console.warn('valentinesProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Mother's Day
    else if (categorySlug === 'mothers-day-gifts') {
        if (typeof window.mothersdayProducts !== 'undefined' && window.mothersdayProducts && window.mothersdayProducts.products) {
            console.log('Loading mothersdayProducts:', window.mothersdayProducts.products.length);
            allCategoryProducts = [...window.mothersdayProducts.products];
        } else {
            console.warn('mothersdayProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Father's Day
    else if (categorySlug === 'fathers-day-gifts') {
        if (typeof window.fathersdayProducts !== 'undefined' && window.fathersdayProducts && window.fathersdayProducts.products) {
            console.log('Loading fathersdayProducts:', window.fathersdayProducts.products.length);
            allCategoryProducts = [...window.fathersdayProducts.products];
        } else {
            console.warn('fathersdayProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Easter
    else if (categorySlug === 'easter-gifts') {
        if (typeof window.easterProducts !== 'undefined' && window.easterProducts && window.easterProducts.products) {
            console.log('Loading easterProducts:', window.easterProducts.products.length);
            allCategoryProducts = [...window.easterProducts.products];
        } else {
            console.warn('easterProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Independence Day
    else if (categorySlug === 'independence-day-gifts') {
        if (typeof window.independencedayProducts !== 'undefined' && window.independencedayProducts && window.independencedayProducts.products) {
            console.log('Loading independencedayProducts:', window.independencedayProducts.products.length);
            allCategoryProducts = [...window.independencedayProducts.products];
        } else {
            console.warn('independencedayProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Thanksgiving
    else if (categorySlug === 'thanksgiving-gifts') {
        if (typeof window.thanksgivingProducts !== 'undefined' && window.thanksgivingProducts && window.thanksgivingProducts.products) {
            console.log('Loading thanksgivingProducts:', window.thanksgivingProducts.products.length);
            allCategoryProducts = [...window.thanksgivingProducts.products];
        } else {
            console.warn('thanksgivingProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Halloween (uses specialOffersData format)
    else if (categorySlug === 'halloween-gifts') {
        if (typeof window.halloweenSpecialOffers !== 'undefined' && window.halloweenSpecialOffers) {
            console.log('Loading halloweenSpecialOffers:', window.halloweenSpecialOffers.length);
            allCategoryProducts = [...window.halloweenSpecialOffers];
        } else {
            console.warn('halloweenSpecialOffers not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Christmas
    else if (categorySlug === 'christmas-gifts') {
        if (typeof window.christmasProducts !== 'undefined' && window.christmasProducts && window.christmasProducts.products) {
            console.log('Loading christmasProducts:', window.christmasProducts.products.length);
            allCategoryProducts = [...window.christmasProducts.products];
        } else {
            console.warn('christmasProducts not available');
            allCategoryProducts = [];
        }
    }
    // Holiday Gifts - Secret Santa (uses specialOffersData format)
    else if (categorySlug === 'secret-santa-gifts') {
        if (typeof window.specialOffersData !== 'undefined' && window.specialOffersData) {
            console.log('Loading specialOffersData for Secret Santa Gifts:', window.specialOffersData.length);
            allCategoryProducts = [...window.specialOffersData];
        } else {
            console.warn('specialOffersData not available');
            allCategoryProducts = [];
        }
    }
    // Special case: Include "Gift Ideas for Her" (banner1Products) in "birthday-gifts-for-girlfriends"
    else if (categorySlug === 'birthday-gifts-for-girlfriends') {
        // Filter products by category
        allCategoryProducts = allProductsData.filter(product =>
            product.category === categorySlug
        );
        // Check if banner1Products is available (from gift-ideas-for-her page)
        if (typeof window.banner1Products !== 'undefined' && window.banner1Products) {
            console.log('Adding banner1Products (Gift Ideas for Her):', window.banner1Products.length);
            // Add banner1Products to the beginning
            allCategoryProducts = [...window.banner1Products, ...allCategoryProducts];
        } else {
            console.warn('banner1Products not available - make sure banner-1-data.js is loaded');
        }
    }
    // Default: Filter products by category
    else {
        allCategoryProducts = allProductsData.filter(product =>
            product.category === categorySlug
        );
    }

    // Ensure all products have priceValue field for filtering
    allCategoryProducts.forEach(product => {
        if (!product.priceValue && product.price) {
            // Extract numeric value from price string (e.g., "$19.99" -> 19.99)
            const priceStr = product.price.toString().replace('$', '').replace(',', '');
            product.priceValue = parseFloat(priceStr) || 0;
        }
    });

    console.log('Loaded category products:', allCategoryProducts.length);
}

// Filter products by budget
function filterCategoryByBudget(budget) {
    console.log('Filtering category products by budget:', budget);

    let filteredProducts = [...allCategoryProducts];

    // Apply budget filter
    if (budget !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            const price = product.priceValue;
            switch(budget) {
                case 'under-10':
                    return price < 10;
                case 'under-25':
                    return price >= 10 && price < 25;
                case 'under-50':
                    return price >= 25 && price < 50;
                case 'under-100':
                    return price >= 50 && price < 100;
                default:
                    return true;
            }
        });
    }

    // Sort by price (lowest to highest)
    filteredProducts.sort((a, b) => a.priceValue - b.priceValue);

    // Update active button
    updateBudgetButtons(budget);

    // Store current filtered products
    currentCategoryProducts = filteredProducts;

    console.log('Filtered products:', filteredProducts.length);

    // Render the products
    renderCategoryProducts(filteredProducts);
}

// Update budget button active state
function updateBudgetButtons(activeBudget) {
    const buttons = document.querySelectorAll('.budget-btn');
    buttons.forEach(button => {
        const buttonBudget = button.getAttribute('data-budget');
        if (buttonBudget === activeBudget) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Handle search functionality
function handleCategorySearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();

    if (searchTerm === '') {
        // Show all current products if search is empty
        renderCategoryProducts(currentCategoryProducts);
        return;
    }

    // Filter current products by search term
    const searchResults = currentCategoryProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        (product.category && product.category.toLowerCase().includes(searchTerm))
    );

    renderCategoryProducts(searchResults);
}

// Render category products
function renderCategoryProducts(products) {
    console.log('Rendering category products:', products.length);
    console.log('Sample product IDs:', products.slice(0, 5).map(p => p.id));

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
    const productsHTML = products.map(product => createCategoryProductCard(product)).join('');
    productsContainer.innerHTML = productsHTML;

    console.log('Successfully rendered', products.length, 'products');
    console.log('Total product cards in DOM:', document.querySelectorAll('.product-card').length);
}

// Create category product card
function createCategoryProductCard(product) {
    const stars = '★'.repeat(Math.floor(product.rating)) +
                 (product.rating % 1 >= 0.5 ? '☆' : '') +
                 '☆'.repeat(5 - Math.ceil(product.rating));

    const featuredBadge = product.featured ?
        '<div class="featured-badge">Featured</div>' : '';

    return `
        <div class="product-card ${product.featured ? 'featured-product' : ''}" data-id="${product.id}" data-affiliate-link="${product.affiliateLink}" onclick="handleProductCardClick(event, '${product.affiliateLink}')" style="cursor: pointer;">
            ${featuredBadge}
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

// Handle product card click (for entire card clickability)
function handleProductCardClick(event, affiliateLink) {
    // Don't navigate if clicking on the button itself
    if (event.target.classList.contains('product-btn') || event.target.closest('.product-btn')) {
        return;
    }

    // Open affiliate link in new tab
    window.open(affiliateLink, '_blank', 'noopener');
}

// Handle product image click
function handleProductImageClick(event, affiliateLink) {
    event.stopPropagation(); // Prevent card click event
    window.open(affiliateLink, '_blank', 'noopener');
}

// Display error message
function displayErrorMessage(message) {
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        productsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #dc3545;">
                <h3>Error</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Make filterCategoryByBudget available globally for HTML onclick handlers
window.filterCategoryByBudget = filterCategoryByBudget;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeCategoryPage);
