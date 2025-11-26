export const API_BASE_URL = 'https://perenual.com/api'

function parseBooleanEnv(value: string | boolean | undefined): boolean | undefined {
  if (value === undefined) return undefined
  if (typeof value === 'boolean') return value
  return value.toLowerCase() === 'true'
}

/**
 * Flag to use mock data instead of real API requests.
 *
 * Priority:
 * 1. If VITE_USE_MOCK_API is explicitly set in .env, use that value
 * 2. Otherwise, default to true in development, false in production
 *
 * Usage:
 * - Development: Mocks enabled by default (no API key needed)
 * - Production: Real API by default (requires API key)
 * - Override: Set VITE_USE_MOCK_API=true/false in .env to force behavior
 */
const explicitMockFlag = parseBooleanEnv(import.meta.env.VITE_USE_MOCK_API)
const isDevelopment = import.meta.env.MODE === 'development'

export const USE_MOCK_API = explicitMockFlag ?? isDevelopment
