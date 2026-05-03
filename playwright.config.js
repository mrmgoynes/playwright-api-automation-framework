// @ts-check
const { defineConfig } = require('@playwright/test');

// Load variables from .env
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  use: {
    /* Use the variable from .env */
    baseURL: process.env.BASE_URL || 'https://herokuapp.com',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  },
  /* One project for API tests */
  projects: [
    {
      name: 'api-tests',
    },
  ],
}); // This is the ONLY closing bracket needed for the whole block

