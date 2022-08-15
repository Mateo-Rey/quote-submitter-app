import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GetHelpResources } from "./pages/GetHelpResources";
import Home from "./pages/Home";
import { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAQaHgg_f04XfRG7yZM2ioYpxHJT0BOJ7A",
  authDomain: "chat-app-98837.firebaseapp.com",
  projectId: "chat-app-98837",
  storageBucket: "chat-app-98837.appspot.com",
  messagingSenderId: "625295234706",
  appId: "1:625295234706:web:e84ea856a3bd587dd6f84b"
};

const connect = () => {
  const app = initializeApp(firebaseConfig);
  return getAuth(app);
};



function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const handleLogin = async ( ) => {
    const auth = connect()
      const provider = new GoogleAuthProvider()
      const user = await signInWithPopup(auth, provider)
          .catch(err => alert(err.message))
      if(user) {
          console.log(user)
          setIsLoggedIn(true)
  }
  }


  return (
    <>
  
      <Router>
        <div className="App">
          <header>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/resources">Resources</Link>&nbsp;
            {!isLoggedin && <button onClick={handleLogin}>Login!</button>}
          </header>
          <Routes>
            <Route path="/resources" element={<GetHelpResources />} />
            <Route index path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
