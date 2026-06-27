import { expect, test } from 'vitest'
import { cn } from './utils'

test('cn merges tailwind classes correctly', () => {
  expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
  expect(cn('px-2 py-2', 'p-4')).toBe('p-4')
  expect(cn('text-sm', 'text-lg')).toBe('text-lg')
})

test('cn handles conditional classes', () => {
  expect(cn('font-bold', true && 'text-lg', false && 'text-xl')).toBe('font-bold text-lg')
})
