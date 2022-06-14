//import logo from "./logo.svg";
import React, { useContext } from "react";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/footer";
import Personal from "./pages/personal/personal";
import { ThemeContext } from "./components/theme/context";
//import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import Business from "./pages/business/business";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const { themes } = useContext(ThemeContext);
  return (
    <div className={`App ${themes}`}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Personal />}></Route>
          <Route path="/business" element={<Business />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
