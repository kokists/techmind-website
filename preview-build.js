// Simple production build preview server
const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3000;

// Enable gzip compression for all responses
app.use(compression());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  // Set cache headers
  maxAge: '1y',
  setHeaders: (res, path) => {
    // Don't cache HTML files
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Handle SPA routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`\x1b[36m%s\x1b[0m`, `✨ Production build preview running at http://localhost:${port}`);
  console.log(`\x1b[33m%s\x1b[0m`, '⚠️  This is a simple preview server and not suitable for actual production use');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down server');
  process.exit(0);
});
