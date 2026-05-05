const { test, expect } = require('@playwright/test');
const { id } = require('../test-data/last-booking-id.json');

test('DELETE - Remove the booking', async ({ request }) => {
    // 1. Generate the Auth Token first (This API requires it for Deletes)
    const authResponse = await request.post('/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        }
    });
    const authBody = await authResponse.json();
    const token = authBody.token;

    // 2. Perform the Delete using the Saved ID and the Token
    const response = await request.delete(`/booking/${id}`, {
        headers: {
            'Cookie': `token=${token}`
        }
    });

    // 3. Verify the deletion was successful
    // Note: This specific API returns 201 Created for a successful delete!
    expect(response.status()).toBe(201);

    console.log(`Booking ID ${id} has been successfully deleted.`);
});
