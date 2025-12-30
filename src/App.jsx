import { useState } from "react";
import AppNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./App.css";

function App(){

  const [activePage, setActivePage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
    <AppNavbar setActivePage={() => {}} />

    {activePage === "home" && (
        <Home setActivePage={setActivePage}
        setSelectedCategory={setSelectedCategory} />
    )}
    
    </>
  )
}

export default App;