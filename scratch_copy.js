const fs = require('fs');
const path = require('path');

const images = [
    { src: 'c:\\Users\\qazit\\OneDrive\\Desktop\\New folder (3)\\design\\a_premium_high_fidelity_ai_dashboard_visualization_for_a_saas_product._includes\\screen.png', dest: 'public/images/dashboard.png' },
    { src: 'c:\\Users\\qazit\\OneDrive\\Desktop\\New folder (3)\\design\\a_premium_saas_product_visualization_showing_scale_operations_without_scaling\\screen.png', dest: 'public/images/automation.png' },
    { src: 'c:\\Users\\qazit\\OneDrive\\Desktop\\New folder (3)\\design\\a_sophisticated_ai_integration_map_for_a_saas_product._shows_a_central_glowing\\screen.png', dest: 'public/images/integration.png' }
];

images.forEach(img => {
    try {
        if (!fs.existsSync(img.src)) {
            console.error(`Source file not found: ${img.src}`);
            return;
        }
        fs.copyFileSync(img.src, img.dest);
        console.log(`Copied ${img.src} to ${img.dest}`);
    } catch (err) {
        console.error(`Error copying ${img.src}: ${err.message}`);
    }
});

