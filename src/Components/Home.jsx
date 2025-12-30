function Home({setActivePage}) {
    return (
        <section 
        style={
            {
                backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1558448495-5ef3fce92344?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFuamlyfGVufDB8fDB8fHww')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "120px 0",
                color: "white",
            }
        }
        >
         <div className="container">
            <span className="badge bg-warning text-dark">
                Berita Terkini
            </span>
            <h1 className="fw-bold mt-3">
                 Portal Berita Online Terpercaya
            </h1>
             <p className="mt-3" style={{ maxWidth: "600px" }}>
                Menyajikan berita terbaru,cepat,dan akurat dari berbagai sumber terpercaya di seluruh dunia.
             </p>
             <button className="btn btn-warning mt-3"
             onClick={() => setActivePage("news")}
             >
                Lihat Berita
             </button>

            </div> 
        </section>
    );
}
export default Home;