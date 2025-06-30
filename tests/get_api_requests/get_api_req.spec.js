import { test, expect } from '@playwright/test'

test('GET - Get User Details', async ({ request }) => {
    const response = await request.get(`/api/users/2`)
    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)
    expect(responseBody.data.id).toBe(2)
    expect(responseBody.data.first_name).toBe('Janet')
    expect(responseBody.data.last_name).toBe('Weaver')
    expect(responseBody.data.email).toBeTruthy()
    expect(responseBody.data.avatar).toBeTruthy()
})