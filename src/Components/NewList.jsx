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
            title: "Banjir Melanda Beberapa Daerah",
            category: "Bencana",
            image : "https://images.unsplash.com/photo-1617494532490-297fc0eb515e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhbmppcnxlbnwwfHwwfHx8MA%3D%3D",
            excerpt: "Hujan deras yang melanda beberapa wilayah menyebabkan banjir besar, mengakibatkan evakuasi massal dan kerusakan infrastruktur."
        },

         {
            id:3,
            title: "Pemerintah Umumkan Kebijakan Baru",
            category: "Nasional",
            image : "https://images.unsplash.com/photo-1756142183803-d7092cfef1e0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVtZW1yaW50YWglMjBpbmRvbmVzaWElMjB1bXVta2FuJTIwa2ViaWpha2FuJTIwYmFydXxlbnwwfHwwfHx8MA%3D%3D",
            excerpt: "Kebijakan baru diumumkan untuk meningkatkan kesejahteraan..."
        },

         {
            id:4,
            title: "Konflik Global Jadi Sorotan Dunia",
            category: "Internasional",
            image : "https://media.istockphoto.com/id/1216979810/id/foto/konsep-serangan-virus-corona-dunia-dunia-bumi-menaruh-masker-untuk-melawan-virus-corona-konsep.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RzBqFfNgcoRmcUMi2wI1d6SqRgaejJXJiv3n3Tc3cY=",
            excerpt: "Konflik yang sedang berlangsung di beberapa wilayah menjadi perhatian utama komunitas internasional..."
         }
    ];
const filteredNews = category
? newsData.filter(
    (news) => news.category === category
)
: newsData;

return(
    <section style={{padding: "80px 0" }}>
        <div className="container">
            <h2 className="fw-bold mb-4">
                {category ? `Berita ${category}` : "Berita Terbaru"}
            </h2>

            <div className="row">
                {filteredNews.map((news)=> (
                    <div className="col-md mb-4" key={news.id}>
                        <div className="card h-100 shadow-sm" style={{cursor:"pointer"}} onClick={() =>onSelect(news)}>
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
