import { useState } from "react";
import AppNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewList from "./Components/NewList";
import "./App.css";

function App(){

  const [activePage, setActivePage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedNews, setSelectedNews] = useState(null);
  return (
    <>
    <AppNavbar setActivePage={setActivePage}
    setSelectedCategory={selectedCategory}/>

    {activePage === "home" && (
        <Home setActivePage={setActivePage}
        setSelectedCategory={setSelectedCategory} />
    )}
    {activePage === "news" && !selectedNews &&(
      <NewList
      category={selectedCategory}
      onSelect={selectedNews}
      />
    )}
    </>
  )
}

export default App;