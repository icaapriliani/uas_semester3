import { useState } from "react";

function NewList({ onSelect, category }) {
  const [search, setSearch] = useState("");
  const newsData = [
    {
      id: 1,
      title: "Teknologi AI semakin canggih",
      category: "Teknologi",
      image:
        "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVrbm9sb2dpfGVufDB8fDB8fHww",
      excerpt:
        "Perkembangan teknologi kecerdasan buatan (AI) terus melaju pesat dengan inovasi-inovasi terbaru yang mengubah cara kita hidup dan bekerja.",
      source:
        "https://ifg-life.id/berita/article/viral/detail/tips-menghadapi-ai-untuk-mempermudah-hidup",
    },

    {
      id: 2,
      title: "AI Mengubah Dunia Teknologi",
      category: "Teknologi",
      image:
        "https://plus.unsplash.com/premium_vector-1761265310439-8474a411e173?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBtZW5ndWJhaCUyMGR1bmlhJTIwdGVrbm9sb2dpfGVufDB8fDB8fHww",
      excerpt:
        "Kecerdasan buatan (AI) kini menjadi kekuatan utama yang mendorong inovasi di berbagai sektor teknologi.",
      source:
        "https://binus.ac.id/malang/computer-science/2024/12/04/masa-depan-ai-bagaimana-ai-mengubah-dunia/",
    },
    {
      id: 3,
      title: "Startup AI Lokal Berkembang Pesat",
      category: "Teknologi",
      image:
        "https://plus.unsplash.com/premium_vector-1763527466467-b256440c3309?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWklMjBtZW5ndWJhaCUyMGR1bmlhJTIwdGVrbm9sb2dpfGVufDB8fDB8fHww",
      excerpt:
        "Beberapa startup AI lokal menunjukkan pertumbuhan pesat dengan menghadirkan solusi inovatif di bidang kesehatan, pendidikan, dan bisnis.",
      source:
        "https://www.tribunnews.com/techno/7757738/startup-ai-lokal-bidik-lonjakan-pendapatan-10-kali-lipat-pada-2026-fokus-perluas-layanan-korporasi",
    },
    {
      id: 4,
      title: "Keamanan Siber di Era Deepfake",
      category: "Teknologi",
      image:
        "https://media.istockphoto.com/id/2043763507/id/foto/keamanan-cyber-pada-antarmuka-virtual-modern-masuk-ke-keamanan-internet-media-sosial-dan-basis.jpg?s=612x612&w=0&k=20&c=jaLrQRWgPvmiDj3aczgVUSglRz8pXgckN9rUaJYZZQw=",
      excerpt:
        "Ancaman penipuan berbasis video dan suara yang semakin sulit dibedakan dengan aslinya.",
      source: "https://www.sectigo.com/blog/what-deepfakes-mean-for-security",
    },

    {
      id: 5,
      title: "Banjir Melanda Beberapa Daerah Sumatera Barat",
      category: "Bencana",
      image:
        "https://images.unsplash.com/photo-1617494532490-297fc0eb515e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmppcnxlbnwwfHwwfHx8MA%3D%3D",
      excerpt:
        "Hujan deras yang melanda beberapa wilayah menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur.",
      source:
        "https://www.republika.id/posts/59683/banjir-susulan-masih-terus-terjadi-di-sumbar-dan-aceh",
    },
    {
      id: 6,
      title: "Longsor Terjadi di Jawa Barat",
      category: "Bencana",
      image:
        "https://media.istockphoto.com/id/1334592547/id/foto/tanah-longsor-kaki-bukit.jpg?s=612x612&w=0&k=20&c=Ln17JapLsMsJ804gSOJS8hiWmdvN6G83v4eRdId9vsM=",
      excerpt:
        "Hujan deras yang melanda beberapa wilayah di bebrapa daerah di jawa barat  menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur.",
      source:
        "https://www.cnnindonesia.com/nasional/20260102160719-20-1312893/longsor-di-jatinangor-jabar-timbun-6-warga",
    },
    {
      id: 7,
      title: "Banjir Besar Melanda Jakarta",
      category: "Bencana",
      image:
        "https://media.istockphoto.com/id/1330653069/id/foto/sebuah-rumah-pedesaan-terendam-air-banjir-yang-disebabkan-oleh-hujan-deras-di-filipina.jpg?s=612x612&w=0&k=20&c=vMcyJIDNW5AtTsil5m0naKQJG8ovUfeAG0hozR98uhs=",
      excerpt:
        "Hujan deras yang melanda beberapa wilayah menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur.",
      source:
        "https://pslh-ums.ac.id/banjir-besar-melanda-jakarta-dan-bekasi-ribuan-warga-mengungsi/",
    },
    {
      id: 8,
      title: "Ketahanan Pangan Pasca-Bencana",
      category: "Bencana",
      image:
        "https://media.istockphoto.com/id/1487915175/id/foto/kebun-apel-banjir-di-motueka-wilayah-tasman-aotearoa-selandia-baru.jpg?s=612x612&w=0&k=20&c=naxJS5LVXLq1mQvjKtxBvs4SEZrbaxMeO7GeVZKwqVQ=",
      excerpt:
        "Strategi pemerintah dan organisasi dunia dalam menjaga suplai makanan saat wilayah pertanian luluh lantak oleh banjir atau kekeringan.",
      source:
        "https://badanpangan.go.id/blog/post/cadangan-beras-pemerintah-mumpuni-untuk-kebutuhan-konsumsi-sampai-akhir-tahun-sekaligus-bantu-masyarakat-terdampak-bencana-alam",
    },
    {
      id: 9,
      title: "Pemerintah Umumkan Kebijakan Baru",
      category: "Nasional",
      image:
        "https://images.unsplash.com/photo-1756142183803-d7092cfef1e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVtZW1yaW50YWglMjBpbmRvbmVzaWElMjB1bXVta2FuJTIwa2ViaWpha2FuJTIwYmFydXxlbnwwfHwwfHx8MA%3D%3D",
      excerpt: "Kebijakan baru diumumkan untuk meningkatkan kesejahteraan...",
      source:
        "https://www.ekon.go.id/publikasi/detail/6558/paket-ekonomi-2025-strategi-pemerintah-dorong-pertumbuhan-tingkatkan-investasi-dan-ciptakan-lapangan-kerja",
    },
    {
      id: 10,
      title: "Presiden Resmikan IKN",
      category: "Nasional",
      image:
        "https://media.istockphoto.com/id/483101678/id/foto/tampilan-kota-udara.jpg?s=612x612&w=0&k=20&c=rwlCRdCBnKTWbWbGAJEEvHurmIpNEQh3FdYjBuDC3Gc=",
      excerpt:
        "Presiden meresmikan ibu kota negara yang baru dengan harapan mendorong pemerataan pembangunan...",
      source:
        "https://setkab.go.id/presiden-jokowi-resmikan-istana-negara-di-ibu-kota-nusantara/",
    },
    {
      id: 11,
      title: "Ekonomi Nasional Tumbuh",
      category: "Nasional",
      image:
        "https://media.istockphoto.com/id/2224896024/id/foto/pria-itu-mencatat-pertumbuhan-ekonomi-industri-pabrik-peningkatan-produksi.jpg?s=612x612&w=0&k=20&c=JFsdjfnI2zHXIyIumGyx6X43lMphLf16iaxWc_Qmuf4=",
      excerpt: "Kebijakan baru diumumkan untuk meningkatkan kesejahteraan...",
      source:
        "https://ekonomi.tvrinews.com/berita/tfckt24-ekonomi-indonesia-2026-diprediksi-tumbuh-agresif",
    },
    {
      id: 12,
      title: "MBG Jadi Sorotan",
      category: "Nasional",
      image:
        "https://images.unsplash.com/photo-1756142183803-d7092cfef1e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVtZW1yaW50YWglMjBpbmRvbmVzaWElMjB1bXVta2FuJTIwa2ViaWpha2FuJTIwYmFydXxlbnwwfHwwfHx8MA%3D%3D",
      excerpt:
        "Prabowo Subianto, membeberkan capaian luar biasa dari program Makan Bergizi Gratis (MBG) yang kini menjadi sorotan dunia",
      source: "https://www.kppod.org/berita/view?id=1510",
    },
    {
      id: 13,
      title: "Konflik Global Jadi Sorotan Dunia",
      category: "Internasional",
      image:
        "https://media.istockphoto.com/id/1216979810/id/foto/konsep-serangan-virus-corona-dunia-dunia-bumi-menaruh-masker-untuk-melawan-virus-corona-konsep.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RzBqFfNgcoRmcUMi2wI1d6SqRgaejJXJiv3n3Tc3cY=",
      excerpt:
        "Konflik yang sedang berlangsung di beberapa wilayah menjadi perhatian utama komunitas internasional...",
      source:
        "https://www.idntimes.com/news/world/deretan-konflik-global-yang-terus-membara-sepanjang-2025-00-84mpg-zwxyk8",
    },
    {
      id: 14,
      title: "Krisis Iklim dan Migrasi",
      category: "Internasional",
      image:
        "https://media.istockphoto.com/id/1593270139/id/foto/perubahan-iklim-membandingkan-dunia-hijau-yang-indah-dengan-kerusakan-yang-dibawa-oleh.jpg?s=612x612&w=0&k=20&c=1oCDOxFanjElX6dsViVZQamdZxB10vLfWCUA__kSVl8=",
      excerpt:
        "Bagaimana perubahan cuaca ekstrem di satu wilayah memicu gelombang pengungsi besar-besaran ke negara lain.",
      source:
        "https://unair.ac.id/fisip-green-society-mengupas-krisis-iklim-dan-lonjakan-migrasi/",
    },
    {
      id: 15,
      title: "Diplomasi Ruang Angkasa",
      category: "Internasional",
      image:
        "https://media.istockphoto.com/id/627353424/id/foto/bendera-nasional.jpg?s=612x612&w=0&k=20&c=ubi_wQdBsISt9cbKxYzfW5GEbE7ao87EMOeV9CvR0q4=",
      excerpt:
        "Kerja sama dan persaingan antarnegara dalam misi pembangunan pangkalan permanen di Bulan.",
      source: "https://www.diplomacy.edu/topics/space-diplomacy/",
    },
    {
      id: 16,
      title: "Stabilitas Ekonomi Pasca-Konflik",
      category: "Internasional",
      image:
        "https://media.istockphoto.com/id/1216979810/id/foto/konsep-serangan-virus-corona-dunia-dunia-bumi-menaruh-masker-untuk-melawan-virus-corona-konsep.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RzBqFfNgcoRmcUMi2wI1d6SqRgaejJXJiv3n3Tc3cY=",
      excerpt:
        "Analisis pemulihan jalur perdagangan global setelah ketegangan di wilayah strategis (seperti Laut Merah atau Selat Malaka).",
      source:
        "https://www.sciencedirect.com/science/article/pii/S0264999322002267",
    },
  ];
  const filteredNews = newsData.filter((news) => {
    const matchCategory = category ? news.category === category : true;
    const matchSearch = news.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section style={{ padding: "50px 0" }}>
      <div className="container  ">
        <h2 className="fw-bold mb-3">
          {category ? `Kategori ${category}` : "Berita Terbaru"}
        </h2>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Cari Berita..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="row g-4">
          {filteredNews.map((news) => (
            <div className="col-lg-3 col-md-6 mb-4" key={news.id}>
              <div
                className="card h-100 shadow-sm news-card"
                style={{ cursor: "pointer" }}
                onClick={() => onSelect(news)}
              >
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                />
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">
                    {news.category}
                  </span>
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.excerpt}</p>
                </div>
              </div>
            </div>
          ))}

          {filteredNews.length === 0 && (
            <div className="col-12">
              <p className="text-center text-muted">Berita tidak ditemukan</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default NewList;
