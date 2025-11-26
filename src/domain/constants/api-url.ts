export const API_BASE_URL = 'https://perenual.com/api'

function parseBooleanEnv(value: string | boolean | undefined): boolean | undefined {
  if (value === undefined) return undefined
  if (typeof value === 'boolean') return value
  return value.toLowerCase() === 'true'
}

/**
 * Flag to use mock data instead of real API requests.
 *
 * Behavior:
 * - Only fetch from real API if VITE_USE_PERENUAL_API is present and set to true
 * - Otherwise (not present or false), use the mocked version
 *
 * Usage:
 * - Default: Use mock API (no API key needed)
 * - To use real API: Set VITE_USE_PERENUAL_API=true in .env
 */
export const USE_PERENUAL_API = parseBooleanEnv(import.meta.env.VITE_USE_PERENUAL_API) === true
