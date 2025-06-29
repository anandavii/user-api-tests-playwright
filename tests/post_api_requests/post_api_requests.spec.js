import { test, expect } from '@playwright/test'
const baseUrl = 'https://reqres.in/api'
test('POST - Create new user', async ({ request }) => {
    const response = await request.post(`${baseUrl}/user`, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        },
        data: {
            id: 1000,
        },
    })

    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(201)
    expect(responseBody.id).toBe(1000)
    expect(responseBody.createdAt).toBeTruthy()
})

test('POST - Test Successful Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        },
        data: {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        },
    })
    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(200)
    expect(responseBody.token).toBeTruthy()
})

test('POST - Test Failed Login', async ({ request }) => {
    const response = await request.post(`${baseUrl}/login`, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        },
        data: {
            email: 'eve.holt@reqres.in',
        },
    })
    const responseBody = JSON.parse(await response.text())

    expect(response.status()).toBe(400)
    expect(responseBody.error).toBe('Missing password')
})

test('POST - Successful Registration', async ({ request }) => {
    const response = await request.post(`${baseUrl}/api/register`, {
        headers: {
            'x-api-key': 'reqres-free-v1',
        },
        data: {
            email: 'eve.holt@reqres.in',
            password: 'pistol',
        }
    })
    const responseBody = JSON.parse(await response.text())
    expect(response.status()).toBe(201)
    expect(responseBody.email).toBe('eve.holt@reqres.in')
    expect(responseBody.createdAt).toBeTruthy()
})