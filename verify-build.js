#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying build output...');

// Check if dist directory exists
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  console.log('✅ dist directory exists');
  
  // List contents of dist directory
  const files = fs.readdirSync(distPath);
  console.log('📁 Contents of dist directory:');
  files.forEach(file => {
    const filePath = path.join(distPath, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      console.log(`   📂 ${file}/`);
    } else {
      console.log(`   📄 ${file} (${Math.round(stats.size / 1024)}KB)`);
    }
  });
} else {
  console.log('❌ dist directory does not exist');
  process.exit(1);
}

console.log('✅ Build verification complete');
