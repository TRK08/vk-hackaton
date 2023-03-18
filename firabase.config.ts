// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB8nRI4BiBfZAzc5y-_TGY3w2HMBw2NsK8',
  authDomain: 'vk-hackaton-6824d.firebaseapp.com',
  projectId: 'vk-hackaton-6824d',
  storageBucket: 'vk-hackaton-6824d.appspot.com',
  messagingSenderId: '877041404375',
  appId: '1:877041404375:web:15d56fa059a026c616e392'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//initialize firebase auth
const auth = getAuth()

export { app, auth }
