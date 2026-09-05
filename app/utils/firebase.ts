import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app'
import { getAuth, type Auth } from 'firebase/auth'
import { getFirestore, type Firestore } from 'firebase/firestore'

let app: FirebaseApp | undefined
let auth: Auth | undefined
let db: Firestore | undefined

export function useFirebaseClient() {
  const config = useRuntimeConfig()

  if (!getApps().length) {
    const firebaseConfig = {
      apiKey: config.public.firebaseApiKey,
      authDomain: config.public.firebaseAuthDomain,
      projectId: config.public.firebaseProjectId,
      storageBucket: config.public.firebaseStorageBucket,
      appId: config.public.firebaseAppId,
    }

    if (firebaseConfig.apiKey) {
      app = initializeApp(firebaseConfig)
    }
  } else {
    app = getApp()
  }

  if (app && !auth) {
    auth = getAuth(app)
  }

  if (app && !db) {
    db = getFirestore(app)
  }

  return {
    app,
    auth,
    db,
  }
}
