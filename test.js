const addon = require('./build/Release/addon'); // Adjust the path as needed

console.log('Addon loaded successfully.');

// Call the addon function
const result = addon.add(10, 20);
console.log('Result:', result);
