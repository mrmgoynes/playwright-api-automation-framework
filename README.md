# Playwright API Automation Framework

![Playwright API Tests](https://github.com)

A professional REST API automation framework built with **Playwright** and **JavaScript**. This project demonstrates a full CRUD (Create, Read, Update, Delete) lifecycle against the [Restful-Booker API](https://herokuapp.com).

## 🚀 Features
- **Full CRUD Lifecycle:** Automated tests for Creating, Retrieving, and Deleting bookings.
- **Dynamic Data Persistence:** Sophisticated handling of test data by sharing generated IDs between tests using the Node.js file system (`fs`).
- **Secure Authentication:** Automated generation and management of Auth Tokens and Cookies.
- **CI/CD Integration:** Fully automated testing pipeline using **GitHub Actions**.
- **Environment Management:** Secure configuration using `.env` for environment-specific variables.

## 🛠️ Tech Stack
- **Engine:** Playwright (API Request Context)
- **Language:** JavaScript (Node.js)
- **CI/CD:** GitHub Actions
- **Libraries:** Dotenv (Environment Management)

## ⚙️ Local Setup
1. **Clone the repo:**
   ```bash
   git clone https://github.com/mrmgoynes/playwright-api-automation-framework
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment:**
   Create a `.env` file in the root and add:
   `BASE_URL=https://restful-booker.herokuapp.com`

4. **Run Tests:**
   ```bash
   npx playwright test
   ```

## 📊 Test Structure
Tests are ordered numerically (`01-05`) to ensure a stable execution flow and data integrity across the CRUD lifecycle.
