import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import { GetHelpResources } from "./pages/GetHelpResources";
import Home from "./pages/Home";
import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Button } from "antd";

const firebaseConfig = {
  apiKey: "AIzaSyAQaHgg_f04XfRG7yZM2ioYpxHJT0BOJ7A",
  authDomain: "chat-app-98837.firebaseapp.com",
  projectId: "chat-app-98837",
  storageBucket: "chat-app-98837.appspot.com",
  messagingSenderId: "625295234706",
  appId: "1:625295234706:web:e84ea856a3bd587dd6f84b",
};

const connect = () => {
  const app = initializeApp(firebaseConfig);
  return getAuth(app);
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async () => {
    const auth = connect();
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider).catch((err) => {
      
    });

    if (user) {
      console.log(user);
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <div className="App">
      <Button className='leave-site' type='primary'><a href='https://www.google.com'>Leave Site</a></Button>
        
        <Router>
          <header>
          {isLoggedIn ? <Button type="link" className="resources" onClick={() =>{signOut(getAuth()).then(setIsLoggedIn(false))}}>
              Logout
            </Button>: <Button type="link" className="resources" onClick={handleLogin}>
              Login
            </Button> 
            }&nbsp;
            <Link to="/" className="indexLink">
              <Button type="link" className="resources">
                Home
              </Button>
            </Link>
            &nbsp;
            <Link to="/resources" className="resourcesLink">
              <Button type="link" className="resources">
                Resources
              </Button>
            </Link>
            &nbsp;
            
            
          </header>
          <Routes>
            <Route path="/resources" element={<GetHelpResources />} />
            <Route index path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}
export default App;
