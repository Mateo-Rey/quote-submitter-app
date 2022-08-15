import "./App.css";
// import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GetHelpResources } from "./pages/GetHelpResources";
import Home from "./pages/Home";
// import { useState } from "react";
// import { Login } from "./pages/Login";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  // if (!isLoggedIn) {
  //   return <Login setIsLoggedIn={setIsLoggedIn}/>;
  // }else
  return (
    <>
      <Router>
        <div className="App">
          <header>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/resources">Resources</Link>
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
