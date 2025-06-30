import { test, expect } from '@playwright/test'

test('PUT - Sample PUT test', async ({ request }) => {

    const response = await request.put(`/api/users/2`, {
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