import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "antd";

const firebaseConfig = {
  apiKey: "AIzaSyCUn4aAEVUhR8_g4818DnRl0ed0EfUj6sw",
  authDomain: "upload-storage-tj.firebaseapp.com",
  projectId: "upload-storage-tj",
  storageBucket: "upload-storage-tj.appspot.com",
  messagingSenderId: "789085538840",
  appId: "1:789085538840:web:15ff356a0097e7d181516d"
};

export default function Login({ setUser }) {
  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
      .catch(alert);
    setUser(response.user)
    console.log(response.user)
  }

  return (
    <Button type="primary" onClick={handleGoogleLogin}>Sign in with Google</Button>
  )
}