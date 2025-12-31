function NewList({onSelect, category}){
    const newsData =[
        {
            id:1,
            title: "Teknologi AI semakin canggih",
            category: "Teknologi",
            image : "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVrbm9sb2dpfGVufDB8fDB8fHww",
            excerpt: "Perkembangan teknologi kecerdasan buatan (AI) terus melaju pesat dengan inovasi-inovasi terbaru yang mengubah cara kita hidup dan bekerja."
        },

         {
            id:2,
            title: "AI Mengubah Dunia Teknologi",
            category: "Teknologi",
            image : "https://plus.unsplash.com/premium_vector-1761265310439-8474a411e173?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBtZW5ndWJhaCUyMGR1bmlhJTIwdGVrbm9sb2dpfGVufDB8fDB8fHww",
            excerpt: "Kecerdasan buatan (AI) kini menjadi kekuatan utama yang mendorong inovasi di berbagai sektor teknologi."
        },
 {
            id:3,
            title: "Startup AI Lokal Berkembang Pesat",
            category: "Teknologi",
            image : "https://plus.unsplash.com/premium_vector-1763527466467-b256440c3309?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBtZW5ndWJhaCUyMGR1bmlhJTIwdGVrbm9sb2dpfGVufDB8fDB8fHww",
            excerpt: "Beberapa startup AI lokal menunjukkan pertumbuhan pesat dengan menghadirkan solusi inovatif di bidang kesehatan, pendidikan, dan bisnis."
        },
 {
            id:4,
            title: "Keamanan Siber di Era Deepfake",
            category: "Teknologi",
            image : "https://media.istockphoto.com/id/2043763507/id/foto/keamanan-cyber-pada-antarmuka-virtual-modern-masuk-ke-keamanan-internet-media-sosial-dan-basis.jpg?s=612x612&w=0&k=20&c=jaLrQRWgPvmiDj3aczgVUSglRz8pXgckN9rUaJYZZQw=",
            excerpt: "Ancaman penipuan berbasis video dan suara yang semakin sulit dibedakan dengan aslinya."
        },

        {
            id:5,
            title: "Banjir Melanda Beberapa Daerah",
            category: "Bencana",
            image : "https://images.unsplash.com/photo-1617494532490-297fc0eb515e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmppcnxlbnwwfHwwfHx8MA%3D%3D",
            excerpt: "Hujan deras yang melanda beberapa wilayah menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur."
        },
 {
            id:6,
            title: "Longsor Terjadi di Jawa Barat",
            category: "Bencana",
            image : "https://media.istockphoto.com/id/1334592547/id/foto/tanah-longsor-kaki-bukit.jpg?s=612x612&w=0&k=20&c=Ln17JapLsMsJ804gSOJS8hiWmdvN6G83v4eRdId9vsM=",
            excerpt: "Hujan deras yang melanda beberapa wilayah di bebrapa daerah di jawa barat  menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur."
        },
         {
            id:7,
            title: "Banjir Besar Melanda Jakarta",
            category: "Bencana",
            image : "https://media.istockphoto.com/id/1330653069/id/foto/sebuah-rumah-pedesaan-terendam-air-banjir-yang-disebabkan-oleh-hujan-deras-di-filipina.jpg?s=612x612&w=0&k=20&c=vMcyJIDNW5AtTsil5m0naKQJG8ovUfeAG0hozR98uhs=",
            excerpt: "Hujan deras yang melanda beberapa wilayah menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur."
        },
         {
            id:8,
            title: "Ketahanan Pangan Pasca-Bencana",
            category: "Bencana",
            image : "https://media.istockphoto.com/id/1487915175/id/foto/kebun-apel-banjir-di-motueka-wilayah-tasman-aotearoa-selandia-baru.jpg?s=612x612&w=0&k=20&c=naxJS5LVXLq1mQvjKtxBvs4SEZrbaxMeO7GeVZKwqVQ=",
            excerpt: "Strategi pemerintah dan organisasi dunia dalam menjaga suplai makanan saat wilayah pertanian luluh lantak oleh banjir atau kekeringan."
        },
         {
            id:9,
            title: "Pemerintah Umumkan Kebijakan Baru",
            category: "Nasional",
            image : "https://images.unsplash.com/photo-1756142183803-d7092cfef1e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVtZW1yaW50YWglMjBpbmRvbmVzaWElMjB1bXVta2FuJTIwa2ViaWpha2FuJTIwYmFydXxlbnwwfHwwfHx8MA%3D%3D",
            excerpt: "Kebijakan baru diumumkan untuk meningkatkan kesejahteraan..."
        },
 {
            id:10,
            title: "Presiden Resmikan IKN",
            category: "Nasional",
            image : "https://media.istockphoto.com/id/483101678/id/foto/tampilan-kota-udara.jpg?s=612x612&w=0&k=20&c=rwlCRdCBnKTWbWbGAJEEvHurmIpNEQh3FdYjBuDC3Gc=",
        },
 {
            id:11,
            title: "Ekonomi Nasional Tumbuh",
            category: "Nasional",
            image : "https://media.istockphoto.com/id/2224896024/id/foto/pria-itu-mencatat-pertumbuhan-ekonomi-industri-pabrik-peningkatan-produksi.jpg?s=612x612&w=0&k=20&c=JFsdjfnI2zHXIyIumGyx6X43lMphLf16iaxWc_Qmuf4=",
            excerpt: "Kebijakan baru diumumkan untuk meningkatkan kesejahteraan..."
        },
 {
            id:12,
            title: "Pemerintah Umumkan Kebijakan Baru",
            category: "Nasional",
            image : "https://images.unsplash.com/photo-1756142183803-d7092cfef1e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVtZW1yaW50YWglMjBpbmRvbmVzaWElMjB1bXVta2FuJTIwa2ViaWpha2FuJTIwYmFydXxlbnwwfHwwfHx8MA%3D%3D",
            excerpt: "Kebijakan baru diumumkan untuk meningkatkan kesejahteraan..."
        },

         {
            id:13,
            title: "Konflik Global Jadi Sorotan Dunia",
            category: "Internasional",
            image : "https://media.istockphoto.com/id/1216979810/id/foto/konsep-serangan-virus-corona-dunia-dunia-bumi-menaruh-masker-untuk-melawan-virus-corona-konsep.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RzBqFfNgcoRmcUMi2wI1d6SqRgaejJXJiv3n3Tc3cY=",
            excerpt: "Konflik yang sedang berlangsung di beberapa wilayah menjadi perhatian utama komunitas internasional..."
         },
          {
            id:14,
            title: "Krisis Iklim dan Migrasi",
            category: "Internasional",
            image : "https://media.istockphoto.com/id/1593270139/id/foto/perubahan-iklim-membandingkan-dunia-hijau-yang-indah-dengan-kerusakan-yang-dibawa-oleh.jpg?s=612x612&w=0&k=20&c=1oCDOxFanjElX6dsViVZQamdZxB10vLfWCUA__kSVl8=",
            excerpt: "Bagaimana perubahan cuaca ekstrem di satu wilayah memicu gelombang pengungsi besar-besaran ke negara lain."
         },
          {
            id:15,
            title: "Diplomasi Ruang Angkasa",
            category: "Internasional",
            image : "https://media.istockphoto.com/id/627353424/id/foto/bendera-nasional.jpg?s=612x612&w=0&k=20&c=ubi_wQdBsISt9cbKxYzfW5GEbE7ao87EMOeV9CvR0q4=",
            excerpt: "Kerja sama dan persaingan antarnegara dalam misi pembangunan pangkalan permanen di Bulan."
         },
          {
            id:16,
            title: "Stabilitas Ekonomi Pasca-Konflik",
            category: "Internasional",
            image : "https://media.istockphoto.com/id/1216979810/id/foto/konsep-serangan-virus-corona-dunia-dunia-bumi-menaruh-masker-untuk-melawan-virus-corona-konsep.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RzBqFfNgcoRmcUMi2wI1d6SqRgaejJXJiv3n3Tc3cY=",
            excerpt: "Analisis pemulihan jalur perdagangan global setelah ketegangan di wilayah strategis (seperti Laut Merah atau Selat Malaka)."
         }
    ];
const filteredNews = category
? newsData.filter(n=>n.category === category
)
: newsData;

return(
    <section style={{padding: "80px 0" }}>
        <div className="container">
            <h2 className="fw-bold mb-4">
                {category ? `Kategori ${category}` : "Berita Terbaru"}
            </h2>

            <div className="row">
                {filteredNews.map((news)=> (
                    <div className="col-lg-3 col-md-6 mb-4" key={news.id}>
                        <div className="card h-100 shadow-sm news-card" style={{cursor:"pointer"}} onClick={() =>onSelect(news)}>
                            <img
                            src={news.image}
                            className="card-image-top"
                            alt={news.title}
                            />
                            <div className="card-body">
                                <span className="badge bg-secondary mb-2">
                                    {news.category}
                                </span>
                                <h5 className="card-title">
                                    {news.title}
                                </h5>
                                <p className="card-text">
                                    {news.excerpt}
                                </p>
                            </div>

                        </div>

                    </div>
                ))}

                {filteredNews.length === 0 && (
                    <p>Tidak terdapat berita pada kategori ini</p>
                )}
            </div>
        </div>
    </section>
);


}
export default NewList;
