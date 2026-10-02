/**
 * One document from the Firebase Config collection.
 * @typedef {Object} Config
 * @property {string} Key
 * @property {string} Value
 */

/**
 * @param {unknown} data
 * @returns {Config | null}
 */
export function toConfig(data) {
  if (!data || typeof data !== 'object') return null

  const record = /** @type {Record<string, unknown>} */ (data)
  const key = record.Key ?? record.key
  const value = record.Value ?? record.value

  if (typeof key !== 'string' || key.trim() === '' || value == null) return null

  return {
    Key: key,
    Value: typeof value === 'string' ? value : String(value),
  }
}
