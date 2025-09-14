// Product Data - Replace with your actual affiliate links
// All products with category and price information
const allProductsData = [
    // Electronics - various price ranges
    {
        id: 1001,
        title: 'Bluetooth Sleep Headphones Eye Mask',
        price: '$9.99',
        priceValue: 9.99,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 1002,
        title: 'Wireless Phone Charger Pad',
        price: '$9.49',
        priceValue: 9.49,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop',
        rating: 4.3,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 1003,
        title: 'Wireless Bluetooth Earbuds',
        price: '$19.99',
        priceValue: 19.99,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 1004,
        title: 'LED Desk Lamp with USB Charging',
        price: '$24.99',
        priceValue: 24.99,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=300&fit=crop',
        rating: 4.6,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 1005,
        title: 'Portable Bluetooth Speaker',
        price: '$45.99',
        priceValue: 45.99,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
        rating: 4.8,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 1006,
        title: 'Noise Cancelling Headphones',
        price: '$69.99',
        priceValue: 69.99,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 1007,
        title: 'Smart Home Security Camera',
        price: '$95.99',
        priceValue: 95.99,
        category: 'electronics',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },

    // Books - various price ranges
    {
        id: 2001,
        title: 'The Psychology of Money Paperback',
        price: '$8.99',
        priceValue: 8.99,
        category: 'books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.7,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 2002,
        title: 'Atomic Habits by James Clear',
        price: '$9.99',
        priceValue: 9.99,
        category: 'books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.8,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 2003,
        title: 'Think and Grow Rich',
        price: '$15.99',
        priceValue: 15.99,
        category: 'books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.6,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 2004,
        title: 'The 7 Habits of Highly Effective People',
        price: '$22.99',
        priceValue: 22.99,
        category: 'books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 2005,
        title: 'Rich Dad Poor Dad Hardcover',
        price: '$35.99',
        priceValue: 35.99,
        category: 'books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 2006,
        title: 'Complete Works of Shakespeare',
        price: '$89.99',
        priceValue: 89.99,
        category: 'books',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.3,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },

    // Home & Kitchen - various price ranges
    {
        id: 3001,
        title: 'Silicone Oven Mitts',
        price: '$7.99',
        priceValue: 7.99,
        category: 'home-kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.3,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 3002,
        title: 'Bamboo Cutting Board',
        price: '$9.95',
        priceValue: 9.95,
        category: 'home-kitchen',
        image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 3003,
        title: 'Stainless Steel Kitchen Scale',
        price: '$17.99',
        priceValue: 17.99,
        category: 'home-kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 3004,
        title: 'Pyrex Glass Mixing Bowl Set',
        price: '$29.99',
        priceValue: 29.99,
        category: 'home-kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.6,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 3005,
        title: 'Cast Iron Skillet 12-Inch',
        price: '$34.99',
        priceValue: 34.99,
        category: 'home-kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 3006,
        title: 'All-Clad Stainless Steel Cookware Set',
        price: '$299.99',
        priceValue: 299.99,
        category: 'home-kitchen',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.8,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },

    // Appliances - various price ranges
    {
        id: 4001,
        title: 'Electric Can Opener',
        price: '$15.99',
        priceValue: 15.99,
        category: 'appliances',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.1,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 4002,
        title: 'Coffee Maker 12-Cup',
        price: '$39.99',
        priceValue: 39.99,
        category: 'appliances',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
        rating: 4.3,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 4003,
        title: 'Air Fryer 3.7 Quart',
        price: '$69.99',
        priceValue: 69.99,
        category: 'appliances',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.7,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 4004,
        title: 'Instant Pot Duo 7-in-1',
        price: '$79.99',
        priceValue: 79.99,
        category: 'appliances',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
        rating: 4.7,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },

    // Beauty - various price ranges
    {
        id: 5001,
        title: 'Lip Balm Gift Set',
        price: '$8.49',
        priceValue: 8.49,
        category: 'beauty',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 5002,
        title: 'Facial Cleansing Brush',
        price: '$19.99',
        priceValue: 19.99,
        category: 'beauty',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
        rating: 4.3,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 5003,
        title: 'Skincare Set with Vitamin C',
        price: '$45.99',
        priceValue: 45.99,
        category: 'beauty',
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 5004,
        title: 'Professional Hair Dryer',
        price: '$72.99',
        priceValue: 72.99,
        category: 'beauty',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },

    // Sports & Outdoors - various price ranges
    {
        id: 6001,
        title: 'Resistance Bands Exercise Set',
        price: '$9.99',
        priceValue: 9.99,
        category: 'sports-outdoors',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.4,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    },
    {
        id: 6002,
        title: 'Yoga Mat with Carry Strap',
        price: '$24.99',
        priceValue: 24.99,
        category: 'sports-outdoors',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.5,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 6003,
        title: 'Smart Fitness Tracker',
        price: '$39.99',
        priceValue: 39.99,
        category: 'sports-outdoors',
        image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=300&h=300&fit=crop',
        rating: 4.6,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: true
    },
    {
        id: 6004,
        title: 'Professional Basketball',
        price: '$89.99',
        priceValue: 89.99,
        category: 'sports-outdoors',
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
        rating: 4.3,
        affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG',
        featured: false
    }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allProductsData;
}