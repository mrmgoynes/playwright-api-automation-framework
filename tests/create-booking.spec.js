const { test, expect } = require('@playwright/test');
const bookingData = require('../test-data/booking.json');
const fs = require('fs'); // This allows us to write files

test('POST - Create a new booking', async ({ request }) => {
    const response = await request.post('/booking', {
        data: bookingData
    });

    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    const bookingId = responseBody.bookingid;

    // This is the "Pro" move: save the ID to a file
    fs.writeFileSync('test-data/last-booking-id.json', JSON.stringify({ id: bookingId }));

    console.log("New Booking ID Saved: ", bookingId);
});