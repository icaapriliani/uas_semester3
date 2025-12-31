function AppNavbar({setActivePage, setSelectedCategory }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand fw-bold"
                style={{cursor:"pointer" }}
                onClick={() => { setActivePage("home");
                  setSelectedCategory(null);
                }
                }
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
                className="nav-link btn btn-link text-white"
                onClick={() =>  {
                  setActivePage("home");
                  setSelectedCategory(null);
                }}
                >
                    Home
                </button>
                    </li>
                    <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white"
                onClick={() => {setActivePage("news");
                    setSelectedCategory(null);
                }}
              >
                Berita Terbaru
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link text-white"
                onClick={() => setActivePage("about")}
              >
                Tentang
              </button>
            </li>
                      </ul>
                </div>

            </div>
        </nav>
    )
}

export default AppNavbar;