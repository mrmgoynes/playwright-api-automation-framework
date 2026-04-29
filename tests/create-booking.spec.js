const { test, expect } = require('@playwright/test');
const bookingData = require('../test-data/booking.json');

test('POST - Create a new booking', async ({ request }) => {
    const response = await request.post('/booking', {
        data: bookingData
    });

    // Verify the request was successful
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    // Verify the response contains the data we sent
    const responseBody = await response.json();
    expect(responseBody.booking).toMatchObject(bookingData);

    // Log the Booking ID for our next project step
    console.log("New Booking ID: ", responseBody.bookingid);
});