const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('GET - Retrieve an existing booking', async ({ request }) => {
    let bookingId = 1; // Default fallback ID

    // Try to read the dynamic ID if the file exists
    const filePath = path.resolve(__dirname, '../test-data/last-booking-id.json');
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        bookingId = data.id;
    }

    const response = await request.get(`/booking/${bookingId}`);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();
    console.log("Retrieved Booking for ID:", bookingId, responseBody);
});