import { expect, test } from 'vitest'

test('O usuário coinsegue criar uma nova transação', () => {
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
