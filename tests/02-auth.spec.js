const { test, expect } = require('@playwright/test');

test('POST - Generate Auth Token', async ({ request }) => {
    const response = await request.post('/auth', {
        data: {
            "username": "admin",
            "password": "password123"
        }
    });

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');

    console.log("Your Auth Token: ", responseBody.token);
});