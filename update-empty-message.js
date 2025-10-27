const fs = require('fs');
const path = require('path');

// Directory containing the HTML files
const pagesDir = path.join(__dirname, 'pages');

// Old message to replace
const oldMessage = `<div id="no-results" style="display: none; text-align: center; padding: 3rem;">
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filters.</p>
                </div>`;

// New message
const newMessage = `<div id="no-results" style="display: none; text-align: center; padding: 3rem;">
                    <h3>🎁 Gifts on the way!</h3>
                    <p>We're adding hand-picked items shortly!</p>
                </div>`;

// Function to update a file
function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if the file contains the current message
        if (content.includes('Gifts on the way!')) {
            // Use regex to match the no-results div with the current single-line message
            const regex = /<div id="no-results"[^>]*>[\s\S]*?<h3>Gifts on the way! We're adding hand-picked items shortly!<\/h3>[\s\S]*?<\/div>/;

            if (regex.test(content)) {
                content = content.replace(regex, newMessage);

                // Write the updated content back to the file
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✓ Updated: ${path.basename(filePath)}`);
                return true;
            } else {
                console.log(`⚠ Skipped (different structure): ${path.basename(filePath)}`);
                return false;
            }
        }
    } catch (error) {
        console.error(`✗ Error updating ${filePath}:`, error.message);
        return false;
    }
    return false;
}

// Main function
function updateAllFiles() {
    console.log('Starting update process...\n');

    // Read all files in the pages directory
    const files = fs.readdirSync(pagesDir);
    const htmlFiles = files.filter(file => file.endsWith('.html'));

    console.log(`Found ${htmlFiles.length} HTML files\n`);

    let updatedCount = 0;

    // Update each HTML file
    htmlFiles.forEach(file => {
        const filePath = path.join(pagesDir, file);
        if (updateFile(filePath)) {
            updatedCount++;
        }
    });

    console.log(`\n✓ Update complete! Updated ${updatedCount} files.`);
}

// Run the update
updateAllFiles();
