import { test, expect } from '@playwright/test'
const baseUrl = 'https://reqres.in/api'

test('PUT - Sample PUT test', async ({ request }) => {

    const response = await request.put(`${baseUrl}/users/2`, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        },
        data: {
            name: 'new name',
            job: 'new job'
        },
    })

    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)
    expect(responseBody.name).toBe('new name')
    expect(responseBody.job).toBe('new job')
    expect(responseBody.updatedAt).toBeTruthy()
})