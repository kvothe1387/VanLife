import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  documentId
} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyBOqUdj7xyjpZh42isuoKMBnHch4NvGCYM",
  authDomain: "vanlife-1a661.firebaseapp.com",
  databaseURL: "https://vanlife-1a661-default-rtdb.firebaseio.com",
  projectId: "vanlife-1a661",
  storageBucket: "vanlife-1a661.firebasestorage.app",
  messagingSenderId: "1044596649439",
  appId: "1:1044596649439:web:2244a7084e8cd91a61e86a"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef)
  return {
    ...snapshot.data(),
    id: snapshot.id
  }
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}