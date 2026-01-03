function NewsDetail({ news, onBack }) {
  return (
    <section style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop:"20px" }}>
      <div className="container my-5">
        <button className="btn btn-secondary mb-4" onClick={onBack}>
          Kembali
        </button>

        <div className="card border-0 shadow-lg">
          <img
            src={news.image}
            alt={news.title}
            className="card-img-top"
            style={{ maxHeight: "420px", objectFit: "cover" }}
          />
          <div className="card-body p-4 p-md-5">
            <span className="badge bg-primary mb-3">{news.category}</span>
            <h3 className="fw-bold">{news.title}</h3>
            <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
              Dipublikasikan:{news.date || "Hari ini"}. sumber:BeritaOnline
            </p>

            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                textAlign: "justify",
              }}
            >
              {news.excerpt}
            </p>

            <a
              href={news.source}
              target="_blank"
              rel="noopener noreferre"
              className="btn btn-primary mt-3"
            >
              Baca di portal Resmi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewsDetail;
