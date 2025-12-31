function Footer({setActivePage}) {
    return (

        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
        <div className="container">
        <div className="row">
        
        <div className="col-md-4 mb-4">
        <h5 className="fw-bold">Berita Online </h5>
        <p className="text-semibold mb-1">
        portal berita terpercaya yang menyajikan informasi terbaru, cepat, dan akurat daro berbagai kategori
        </p>
        </div>
        
        <div className="col-md-4 mb-4">
        <h6 className="fw-semibold mb-3">
            Menu </h6>
            <ul className="list-unstyled">
                <li>
                    <button className="btn btn-link text-light p-0" onClick={() => setActivePage("home")}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button className="btn btn-link text-light p-0" onClick={() => setActivePage("news")}>
                        Berita Terbaru
                    </button>
                </li>

                        <li>
                <button
                  className="btn btn-link text-light p-0"
                  onClick={() => setActivePage("about")}
                >
                  Tentang
                </button>
              </li>
            </ul>
            </div>
                <div className="col-md-4 mb-4">
                <h6 className="fw-semibold mb-3">Informasi</h6>
                <p className="text-semibold mb-1">Email: info@beritaonline.com</p>
                <p className="text-semibold">Indonesia</p>
            </div>
        </div>
        <hr className="border-secondary" />

        <div className="text-center text-msemibold">
              © {new Date().getFullYear()} Berita Online. All rights reserved.
        </div>
        </div>
        </footer>
    );
}

export default Footer;