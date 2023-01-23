import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBSlVjoHAKXq1Z2cl2ljRbJwfA96DYldKs",
  authDomain: "blogauth-63ff1.firebaseapp.com",
  projectId: "blogauth-63ff1",
  storageBucket: "blogauth-63ff1.appspot.com",
  messagingSenderId: "138219853111",
  appId: "1:138219853111:web:5061e6e4617a3b6af6f6b2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export const SignInWithGoogle = async () => {
  return signInWithPopup(auth, provider).then((result) => {
    return (result.user.email === "yogicodes101@gmail.com")
  }).catch((error) => {
    console.log(error);
  });
}



