import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDF5LFEC8AS3vZKV9iWNqXwESE1Tgo7b6g',
  authDomain: 'ipci-bfb66.firebaseapp.com',
  projectId: 'ipci-bfb66',
  storageBucket: 'ipci-bfb66.appspot.com',
  messagingSenderId: '30420020150',
  appId: '1:30420020150:web:0e97e1544ce3683dc52f17',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

//Ajouter document

export const addDocument = async (data) => {
  const dbInstance = collection(db, 'utilisateur')
  try {
    const value = await addDoc(dbInstance, data)
    console.log(value)
  } catch (error) {
    console.log(error)
  }
}
