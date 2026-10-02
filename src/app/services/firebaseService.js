import { collection, getDocs } from 'firebase/firestore'
import { firestore, isFirebaseConfigured } from '../../../firebase.js'
import { toConfig } from '../Models/Config.js'

const CONFIG_TOPIC = 'Config'
const SERVICE_SUBSCRIBED_KEY = 'ServiceSubscribed'

/**
 * Reads every document in the Firebase Config collection.
 * @returns {Promise<import('../Models/Config.js').Config[]>}
 */
export async function getConfigs() {
  if (!isFirebaseConfigured || !firestore) {
    throw new Error('Firebase is not configured.')
  }

  const snapshot = await getDocs(collection(firestore, CONFIG_TOPIC))

  return snapshot.docs
    .map((doc) => toConfig(doc.data()))
    .filter((config) => config !== null)
}

/**
 * Allows the app only when Config contains Key "ServiceSubscribed" and Value "true".
 * @returns {Promise<boolean>}
 */
export async function isServiceSubscribed() {
  const configs = await getConfigs()

  return configs.some(
    (config) =>
      config.Key === SERVICE_SUBSCRIBED_KEY && config.Value.trim().toLowerCase() === 'true',
  )
}

export const firebaseService = {
  getConfigs,
  isServiceSubscribed,
}
