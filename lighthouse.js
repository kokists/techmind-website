// Lighthouse audit script to automate performance testing
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const writeFileAsync = promisify(fs.writeFile);
const mkdirAsync = promisify(fs.mkdir);

// URLs to test
const urls = [
  'http://localhost:5173/',
  'http://localhost:5173/about',
  'http://localhost:5173/services',
  'http://localhost:5173/capabilities',
  'http://localhost:5173/industries',
  'http://localhost:5173/careers',
  'http://localhost:5173/contact',
];

// Configuration for Lighthouse
const opts = {
  chromeFlags: ['--headless'],
  onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  output: 'html',
};

async function runLighthouse() {
  // Launch Chrome
  const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
  opts.port = chrome.port;

  // Create reports directory if it doesn't exist
  const reportsDir = path.join(__dirname, 'lighthouse-reports');
  try {
    await mkdirAsync(reportsDir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }

  // Run Lighthouse on each URL
  for (const url of urls) {
    console.log(`\nRunning Lighthouse audit for ${url}`);
    
    try {
      const result = await lighthouse(url, opts);
      
      // Generate report name based on URL
      const pageName = new URL(url).pathname.replace(/\//g, '_') || 'home';
      const reportPath = path.join(reportsDir, `${pageName}-${Date.now()}.html`);
      
      // Save report
      await writeFileAsync(reportPath, result.report);
      
      console.log(`Performance score: ${result.lhr.categories.performance.score * 100}`);
      console.log(`Accessibility score: ${result.lhr.categories.accessibility.score * 100}`);
      console.log(`Best Practices score: ${result.lhr.categories['best-practices'].score * 100}`);
      console.log(`SEO score: ${result.lhr.categories.seo.score * 100}`);
      console.log(`Report saved to ${reportPath}`);
      
    } catch (error) {
      console.error(`Error auditing ${url}:`, error);
    }
  }

  await chrome.kill();
}

// Run the audits
runLighthouse().then(() => {
  console.log('\nLighthouse audits completed!');
}).catch(err => {
  console.error('Error running Lighthouse:', err);
});
