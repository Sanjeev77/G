# Amazon Affiliate Gift Website

A responsive website for showcasing Amazon affiliate products organized by price categories ($10, $50, $100). Perfect for hosting on GitHub Pages.

## Features

- **Responsive Design**: Mobile-first design that looks great on all devices
- **Price Categories**: Products organized by budget ranges
- **Search & Filter**: Find products quickly with search and sorting options
- **SEO Optimized**: Meta tags and structured content for better search rankings
- **Fast Loading**: Optimized images and lazy loading for better performance
- **Amazon Affiliate Ready**: Pre-structured for Amazon affiliate links

## Setup Instructions

### 1. Replace Affiliate Links

Open `script.js` and replace the placeholder affiliate links with your actual Amazon affiliate links:

```javascript
// Replace "YOUR-PRODUCT-ID" and "YOUR-TAG" with actual values
affiliateLink: 'https://amazon.com/dp/YOUR-PRODUCT-ID?tag=YOUR-TAG'
```

### 2. Add Your Products

Update the `productData` object in `script.js` with your actual products:

- Replace product titles, prices, and descriptions
- Add your product images (preferably 300x300px)
- Update affiliate links with your Amazon Associate tag
- Set featured products for homepage display

### 3. Customize Content

- Update the site title and description in HTML files
- Replace social media links in the footer
- Modify colors and styling in `styles.css` if desired
- Update the "About" section with your information

### 4. Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your site will be available at `https://yourusername.github.io/repository-name`

## File Structure

```
├── index.html          # Homepage
├── under-10.html       # Products under $10
├── under-50.html       # Products under $50
├── under-100.html      # Products under $100
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality and product data
└── README.md           # This file
```

## Product Data Structure

Each product should have the following structure:

```javascript
{
    id: 1,                    // Unique ID
    title: 'Product Name',    // Product title
    price: '$9.99',          // Price with currency symbol
    image: 'image-url',       // Product image URL
    rating: 4.5,             // Rating out of 5
    affiliateLink: 'link',    // Your Amazon affiliate link
    featured: true           // Whether to show on homepage
}
```

## Customization Tips

### Adding New Categories

1. Create a new HTML file (e.g., `under-200.html`)
2. Copy structure from existing category pages
3. Add category data to `productData` in `script.js`
4. Update navigation menus in all HTML files

### Changing Colors

Main brand colors in `styles.css`:
- Amazon Orange: `#ff9900`
- Dark Blue: `#232f3e`
- Light Blue: `#37475a`

### Adding Analytics

Uncomment the Google Analytics tracking code in `script.js` and add your tracking ID.

## Legal Requirements

- Include affiliate disclosure (already added to footer)
- Follow Amazon Associates terms of service
- Ensure compliance with FTC guidelines for affiliate marketing
- Add privacy policy if collecting user data

## Performance Optimization

- Images are lazy-loaded for better performance
- CSS and JS are minified for production
- Uses modern web standards for fast loading
- Optimized for mobile devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Support

For issues or questions:
1. Check Amazon Associates documentation
2. Review GitHub Pages documentation
3. Test affiliate links regularly to ensure they work

## License

This project is open source. Feel free to modify and use for your own affiliate marketing websites.