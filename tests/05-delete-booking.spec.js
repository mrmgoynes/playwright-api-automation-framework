const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('DELETE - Remove the booking', async ({ request }) => {
    let bookingId = 1; // Default fallback ID for the cloud

    // Try to read the dynamic ID if the file exists
    const filePath = path.resolve(__dirname, '../test-data/last-booking-id.json');
    if (fs.existsSync(filePath)) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        bookingId = data.id;
    }

    // 1. Generate the Auth Token
    const authResponse = await request.post('/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        }
    });
    const authBody = await authResponse.json();
    const token = authBody.token;

    // 2. Perform the Delete using the ID (Dynamic or Fallback)
    const response = await request.delete(`/booking/${bookingId}`, {
        headers: {
            'Cookie': `token=${token}`
        }
    });

    // 3. Verify success (201 or 405 are common for this specific public API)
    expect(response.status()).toBe(201);

    console.log(`Booking ID ${bookingId} has been successfully deleted.`);
});