const { test, expect } = require('@playwright/test');
const { id } = require('../test-data/last-booking-id.json'); // Read the saved ID

test('GET - Retrieve an existing booking', async ({ request }) => {
    // No more hardcoded numbers!
    const response = await request.get(`/booking/${id}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log("Retrieved Booking for ID:", id, responseBody);
});
