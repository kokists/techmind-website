// Simple site testing script to verify all pages load correctly
const puppeteer = require('puppeteer');
const chalk = require('chalk');

// URLs to test - replace with your local development server URL
const baseUrl = 'http://localhost:5173';
const pagePaths = [
  '/',
  '/about',
  '/services',
  '/capabilities',
  '/industries',
  '/careers',
  '/contact',
  '/nonexistent-page' // Tests 404 handling
];

async function testPages() {
  console.log(chalk.blue('🧪 Starting TechMind website tests...'));
  
  // Launch browser
  const browser = await puppeteer.launch({
    headless: "new",
    defaultViewport: {
      width: 1280,
      height: 800
    }
  });
  
  // Create a new page
  const page = await browser.newPage();
  
  // Set up console log handling
  page.on('console', message => {
    if (message.type() === 'error') {
      console.log(chalk.red(`Browser console error: ${message.text()}`));
    }
  });
  
  // Test each page
  let passedTests = 0;
  const totalTests = pagePaths.length;
  
  for (const path of pagePaths) {
    const url = `${baseUrl}${path}`;
    console.log(chalk.yellow(`\n🔍 Testing: ${url}`));
    
    try {
      // Navigate to the page
      const response = await page.goto(url, {waitUntil: 'networkidle0'});
      
      // Check HTTP status
      const status = response.status();
      const isOk = path === '/nonexistent-page' ? status === 404 : status === 200;
      
      if (isOk) {
        // Get page title
        const title = await page.title();
        
        // Check for common React error pattern in the HTML
        const content = await page.content();
        const hasReactError = content.includes('Something went wrong') || 
                             content.includes('Error:');
        
        // Check if main content loaded
        const hasMainContent = await page.evaluate(() => {
          return document.querySelector('main') !== null;
        });
        
        if (hasReactError) {
          console.log(chalk.red(`✖ Failed: React error detected on ${path}`));
        } else if (!hasMainContent && path !== '/nonexistent-page') {
          console.log(chalk.red(`✖ Failed: Main content not found on ${path}`));
        } else {
          console.log(chalk.green(`✓ Passed: ${path} (${status}) - "${title}"`));
          passedTests++;
        }
        
        // Take a screenshot
        await page.screenshot({ 
          path: `test-screenshots${path.replace(/\//g, '-')}.png`,
          fullPage: true 
        });
      } else {
        console.log(chalk.red(`✖ Failed: ${path} (${status})`));
      }
    } catch (error) {
      console.log(chalk.red(`✖ Error testing ${path}: ${error.message}`));
    }
  }
  
  // Print summary
  console.log(chalk.blue('\n📊 Test Summary:'));
  console.log(`Passed: ${passedTests}/${totalTests} (${Math.round(passedTests/totalTests*100)}%)`);
  
  // Close browser
  await browser.close();
  
  return passedTests === totalTests;
}

// Run tests
testPages().then(success => {
  if (success) {
    console.log(chalk.green('\n✅ All tests passed!'));
    process.exit(0);
  } else {
    console.log(chalk.red('\n❌ Some tests failed.'));
    process.exit(1);
  }
}).catch(error => {
  console.log(chalk.red(`\n❌ Test script error: ${error.message}`));
  process.exit(1);
});
