import assert from 'assert'
import dotenv from 'dotenv'
import firebase from 'firebase'

dotenv.config()

const {
  HOST,
  HOST_URL,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID,
} = process.env

assert(HOST, 'host is required')

export const global = {
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DB_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
  },
}

export const db = firebase.initializeApp(global.firebaseConfig)

export const firestore = db.firestore()

export const collections = {
  students: firestore.collection('students'),
}
