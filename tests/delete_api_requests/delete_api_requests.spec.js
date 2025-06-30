import { test, expect } from '@playwright/test'
const baseUrl = 'https://reqres.in/api'
test('DELETE -  Delete user', async ({ request }) => {

    const response = await request.delete(`${baseUrl}/users/2`, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        },
    })

    expect(response.status()).toBe(204)
})