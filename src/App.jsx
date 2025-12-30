import { useState } from "react";
import AppNavbar from "./Components/Navbar";
import Home from "./Components/Home";
function App(){

  const [activePage, setActivePage] = useState("home");
  return (
    <>
    <AppNavbar setActivePage={() => {}} />

    {activePage === "home" && (
        <Home setActivePage={setActivePage} />
    )}
    
    </>
  )
}

export default App;