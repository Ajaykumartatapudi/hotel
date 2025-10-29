import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Footer from "./components/Footer";
import About from "./components/About";
import SignupForm from "./components/SignupForm";
import SupportPage from "./components/SupportPage";
import SignIn from "./components/SignIn"; // ✅ Added import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Content />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
