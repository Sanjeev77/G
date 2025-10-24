#!/bin/bash

# List of all gift category pages that need to be updated
pages=(
    "retirement-gifts.html"
    "birthday-gifts-for-him.html"
    "gifts-for-coworkers.html"
    "gifts-for-new-moms.html"
    "bridal-shower-gifts.html"
    "baby-shower-gifts.html"
    "flower-delivery.html"
    "gift-baskets.html"
    "photo-gifts.html"
    "gifts-for-boyfriends.html"
    "gifts-for-girlfriends.html"
    "gifts-for-moms.html"
    "gifts-for-dads.html"
    "gifts-for-grandparents.html"
    "gifts-for-someone-who-has-everything.html"
    "gifts-for-couples.html"
    "gifts-for-best-friends.html"
    "personalized-gifts.html"
    "birthday-gift-ideas.html"
    "gift-ideas-for-her.html"
)

# Directory containing the pages
pages_dir="pages"

# Pattern to search for
search_pattern='    <!-- Banner 2 Data and Shared Functionality -->
    <script src="../js/banner-2-data.js"></script>'

# Replacement pattern
replace_pattern='    <!-- Gift Category Configurations (must load first) -->
    <script src="../js/gift-category-configs.js"></script>
    <!-- Banner 2 Data and Shared Functionality -->
    <script src="../js/banner-2-data.js"></script>'

# Loop through each page and update it
for page in "${pages[@]}"; do
    filepath="$pages_dir/$page"
    if [ -f "$filepath" ]; then
        echo "Updating $filepath..."
        # Use sed to replace the pattern (Windows-compatible)
        sed -i "s|    <!-- Banner 2 Data and Shared Functionality -->|    <!-- Gift Category Configurations (must load first) -->\n    <script src=\"../js/gift-category-configs.js\"></script>\n    <!-- Banner 2 Data and Shared Functionality -->|" "$filepath"
        echo "Updated $filepath"
    else
        echo "File not found: $filepath"
    fi
done

echo "All files updated!"
