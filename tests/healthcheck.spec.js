const { test, expect } = require('@playwright/test');

test('confirm api is up', async ({ request }) => {
    const response = await request.get('/ping');
    expect(response.status()).toBe(201);
});