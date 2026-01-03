function AppNavbar({ setActivePage, setSelectedCategory, darkMode, setDarkMode }) {
  return (
    <nav className= {`navbar navbar-expand-lg ${
      darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
    }`} >
   
      <div className="container">
        <span
          className="navbar-brand fw-bold"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setActivePage("home");
            setSelectedCategory(null);
          }}
        >
          Berita Online
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link "
                onClick={() => {
                  setActivePage("home");
                  setSelectedCategory(null);
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link "
                onClick={() => {
                  setActivePage("news");
                  setSelectedCategory(null);
                }}
              >
                Berita Terbaru
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link "
                onClick={() => setActivePage("about")}
              >
                Tentang
              </button>
            </li>
            <li className="nav-item ms-3">
              <button className={`btn btn-sm ${
              darkMode ? "btn-outline-light": "btn-outline-dark"
            }`}
              onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ?"☀️ Light" : "🌙 Dark" }
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
