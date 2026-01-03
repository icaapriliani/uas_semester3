import { useState, useEffect } from "react";
import AppNavbar from "./Components/Navbar";
import Home from "./Components/Home";
import NewList from "./Components/NewList";
import NewsDetail from "./Components/NewsDetail";
import Footer from "./Components/Footer";
import About from "./Components/About";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);
  const [darkMode, setDarkMode]=useState(false);

  useEffect (() => {
    const savedTheme =localStorage.getItem("darkMode");
    if (savedTheme ==="true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode" , darkMode);
  }, [darkMode]);
  
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <AppNavbar
        setActivePage={setActivePage}
        setSelectedCategory={setSelectedCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {activePage === "home" && (
        <Home
          setActivePage={setActivePage}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {activePage === "news" && !selectedNews && (
        <NewList category={selectedCategory} onSelect={setSelectedNews} />
      )}
      {selectedNews && (
        <NewsDetail news={selectedNews} onBack={() => setSelectedNews(null)} />
      )}
      {activePage === "about" && <About />}

      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
