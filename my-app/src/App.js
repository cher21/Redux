// import Counter from "./component/classLatihan";
// import Count from "./component/counterHook";
// import Kalkulator from "./component/kalkulator";
// import Parent from "./component/parent";
// import Product from "./component/product";
// import Data from "./component/data";
// import "./App.css"
// import Calculator from './component/kalkulator';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./shared/layout";
import Parent from './component/parent';
import Product from './pages/product';
import User from "./pages/user";
import Login from "./pages/login";
import Home from "./pages/home";
import { useEffect, useState } from "react";
import Logout from "./pages/logout";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {/* <h3> Hello Javascript</h3>
      <h5> Selamat belajar </h5> */}
      {/* <Counter></Counter>
      <Count></Count>
      <Kalkulator></Kalkulator>
      <Parent></Parent> */}
      {/* <Product></Product> */}
      {/* <Data></Data> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={isAuthenticated ? <Layout /> : <Navigate to="/login" />} >
            <Route path='/home' element={(<Home />)} />
            <Route path='/user' element={(<User />)} />
            <Route path='/parent' element={(<Parent />)} />
            <Route path='/product' element={(<Product />)} />
            <Route path='/logout' element={(<Logout />)} />
            {/* <Route path='/login' element={(<Login/>)}/> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
