import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const User = () => {
  return <div>This is the user page</div>;
};

const Home = () => {
  return <div>This is the home page</div>;
};

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/user/:id">User</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}