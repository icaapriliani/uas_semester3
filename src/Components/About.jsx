function About() {
    return (
        <>
        <section className="bg-light py-5">
            <div className="container text-center">
                <h2 className="fw-bold">
                    Tentang Kami
                </h2>
                <p className="text-muted mt-3">
                    Mengenal Lebih dekat portal Berita Online
                </p>
            </div>
        </section>

        <section style={{padding: "80px 0"}}>
            <div className="container">
                <div className="row align-items-center">


                    <div className="col-md-6 mb-4">
                        <h4 className="fw-bold mb-3">
                            Siapa Kami?
                        </h4>
                        <p className="text-muted">
                        <strong>Berita Online</strong>adalah pertal berita digital yang menyediakan informasi aktual. terpercaya, dan mudah diakses oleh masyarakat luas
                        </p>

                        <p className="text-muted">
                            kami menghadirkan berita dari berbagai kategori seperti teknologi, bencana, nasional. dan internaional dengan penyajian yang ringkas  dan informatif
                            </p>
                        </div>


                        <div className="col-md-6 mb-4">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body">
                                    <h5 className="fw-bold mb-3">
                                        Visi & Misi
                                    </h5>
                                    <ul className="text-muted">
                                        <li>Menyajikan berita yang cepat dan akurat</li>
                                        <li>Menjadi sumber informasi terpercaya</li>
                                        <li>Mendukung literasi digital masyarakatt</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




        </section>
        
        </>
    )
}

export default About;