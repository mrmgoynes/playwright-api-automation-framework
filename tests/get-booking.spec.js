const { test, expect } = require('@playwright/test');

test('GET - Retrieve an existing booking', async ({ request }) => {
    // For now, let's use the ID '1' or '2' to test the logic
    // In a real framework, we'd pass the ID from the 'Create' test
    const bookingId = 1;
    const response = await request.get(`/booking/${bookingId}`);

    // Verify success
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    // Verify the structure of the response
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('firstname');
    expect(responseBody).toHaveProperty('lastname');

    console.log("Retrieved Booking:", responseBody);
});