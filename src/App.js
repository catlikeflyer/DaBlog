import React from "react";
import { useSelector } from "react-redux";
import { Blog } from "./components/Blog";
import Homepage from "./components/Home";
import { Navbar } from "./components/Navbar";
import { selectSignedIn } from "./features/UserSlice";
import "./styles/app.css";

const App = () => {
    const isSignedIn = useSelector(selectSignedIn)

  return (
    <div className="app">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
};

export default App;
