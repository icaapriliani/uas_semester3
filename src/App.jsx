import { useState } from "react";
import AppNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewList from "./Components/NewList";
import NewsDetail from "./Components/NewsDetail";
import Footer from "./Components/Footer";


import "./App.css";

function App(){

  const [activePage, setActivePage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedNews, setSelectedNews] = useState(null);
  return (
    <>
    <AppNavbar setActivePage={setActivePage}
     setSelectedCategory={setSelectedCategory}
     />

    {activePage === "home" && (
        <Home setActivePage={setActivePage}
        setSelectedCategory={setSelectedCategory} />
    )}
    {activePage === "news" && !selectedNews &&(
      <NewList
      category={selectedCategory}
      onSelect={setSelectedNews}
      />
    )}
    {selectedNews &&(
      <NewsDetail news={selectedNews}
      onBack={() => setSelectedNews(null)}
      />
    )}

    <Footer setActivePage={setActivePage} />

    </>
  )
}

export default App;