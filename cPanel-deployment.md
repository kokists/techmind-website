# TechMind Website - cPanel Deployment Guide

## 1. Build Preparation

1. Ensure you have a production build ready (run `npm run build`)
2. The build files are in the `dist` directory
3. Verify all assets are properly optimized

## 2. cPanel Setup

### File Transfer
1. Connect to your cPanel account
2. Open File Manager
3. Navigate to your public_html directory (or desired subdirectory)
4. Upload the contents of the `dist` folder:
   - All files in `dist/` directory
   - All files in `dist/assets/` directory

### Important Files to Upload:
- `index.html`
- All JavaScript files from `dist/assets/`
- All CSS files from `dist/assets/`
- All image assets from `dist/assets/`
- `robots.txt`
- `sitemap.xml`
- `manifest.json`

### Directory Structure in cPanel:
```
public_html/
├── index.html
├── assets/
│   ├── images/
│   ├── js/
│   └── css/
├── robots.txt
├── sitemap.xml
└── manifest.json
```

## 3. Configuration

### .htaccess Setup
Create or modify your `.htaccess` file in the root directory:
```
RewriteEngine On
RewriteBase /

# Handle Front Controller...
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Compress text, HTML, JavaScript, CSS, and XML
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Permissions
1. Set permissions for files:
   - All files: 644 (rw-r--r--)
   - All directories: 755 (rwxr-xr-x)

## 4. Verification

1. After upload, verify:
   - All images load correctly
   - All JavaScript and CSS files load
   - The website is responsive
   - All links work
   - The contact form works
   - The website loads quickly

2. Check for any console errors in browser developer tools

## 5. Post-Deployment

1. Clear browser cache
2. Verify SSL certificate is working
3. Check Google Search Console for indexing
4. Monitor website performance
5. Set up regular backups in cPanel

## Troubleshooting

1. If images aren't loading:
   - Check file permissions
   - Verify correct file extensions
   - Check image paths in HTML

2. If JavaScript errors:
   - Check browser console
   - Verify file permissions
   - Check .htaccess rules

3. If website is slow:
   - Check image optimization
   - Verify caching is working
   - Check server resources

## Security Recommendations

1. Change default cPanel password
2. Enable two-factor authentication
3. Regularly update cPanel
4. Monitor access logs
5. Keep backups
6. Use HTTPS for all traffic
7. Regularly scan for malware
