// @ts-check
const { defineConfig } = require('@playwright/test');

// Load variables from .env
require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  /* Force tests to run one by one in order */
  fullyParallel: false,
  workers: 1,

  use: {
    /* Use the variable from .env or fallback to the specific API URL */
    baseURL: process.env.BASE_URL || 'https://restful-booker.herokuapp.com',
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
});


