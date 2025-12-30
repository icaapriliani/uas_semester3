function Home({setActivePage, setSelectedCategory}) {
    return (
        <>
        {/* hero/banner */}
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

        {/* KATEGORI */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9fa" }}>
        <div className="container">
            <h2 className="fw-bold text-center mb-5">
                Ktegori Berita
            </h2>

            <div className="row text-center">
                {[
                    {name: "Teknologi", color:"primary", icon:"💻"},
                     { name: "Bencana", color: "danger", icon: "🌊" },
                      { name: "Nasional", color: "success", icon: "🇮🇩" },
                       { name: "Internasional", color: "warning", icon: "🌍" }
                ].map((cat, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div
                  className="card h-100 border-0 shadow-sm category-card"
                  style={{cursor:"pointer"}}
                  onClick={()=>{
                    setSelectedCategory(cat.name);
                    setActivePage("news");
                  }}
                  >
                    <div className="card-body">
                        <span className={`badge bg-${cat.color} mb-3`}>{cat.icon} {cat.name}</span>
                    <h5 className="fw-semibold">{cat.name}</h5>
                    <p className="text-muted" style ={{ fontSize: "14px" }}>
                      Berita terbaru seputar {cat.name.toLowerCase()}
                      </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>

        </section>
        </>
    );
}
export default Home;