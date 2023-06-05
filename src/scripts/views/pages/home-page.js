const HomePage = {
    async render() {
        return `
       <div class="headercont">
    <div class="header-home">
       
        <p>Ayo olahraga sekarang tidak perlu bingung lagi cari lapangan badminton yang nyaman, dekat dan tentunya bisa booking online juga nih.</p>
    </div>

</div>
  
</div>
<div class="text">
    <div class="about-container">
        <div class="about-image">
            <img src="./img/aboutus.png"" alt="Gambar">
        </div>
        <div class="about-text">
            <h3>About Us</h3>
            <p>BuluBook adalah sebuah platform online yang menyediakan layanan booking lapangan bulu tangkis dengan mudah dan cepat. Dengan BuluBook, pengguna dapat mencari, membandingkan, dan memesan lapangan bulu tangkis secara online dengan beberapa klik.
                Kami bekerja sama dengan penyedia lapangan bulu tangkis terpercaya dan menyediakan pilihan lapangan yang beragam.</p>
            <p>Keamanan, kualitas, dan kepuasan pelanggan menjadi prioritas utama kami. Dengan fitur ulasan dan penilaian dari pengguna lain, BuluBook membantu pengguna dalam memilih lapangan yang sesuai dengan kebutuhan dan preferensi pengguna.</p>
        <a href="#/about-page" class="read-more-button">Read More</a>
        
 </div>
    </div>

</div>


        
<div class="booking-flow">
    <div class="booking-step">
        <div class="step-icon">Cari Lapangan</div>
        <div class="step-description">Pilih lokasi dan tanggal untuk mencari lapangan bulu tangkis yang tersedia.</div>
    </div>
    <div class="booking-step">
        <div class="step-icon">Pilih Lapangan</div>
        <div class="step-description">Pilih lapangan yang sesuai dengan preferensi Anda.</div>
    </div>
    <div class="booking-step">
        <div class="step-icon">Buat Jadwal</div>
        <div class="step-description">Tentukan jadwal dan durasi penyewaan lapangan.</div>
    </div>
    <div class="booking-step">
        <div class="step-icon">Chat WhatsApp</div>
        <div class="step-description">Hubungi kami melalui WhatsApp untuk mengkonfirmasi pemesanan.</div>
    </div>
</div>

<div class="popular-grounds">
    <h3>Lapangan Populer</h3>
    <div class="ground-box">
        <div class="ground-image">
            <img src="lapangan1.jpg" alt="Lapangan 1">
        </div>
        <div class="ground-info">
            <h4>Nama Lapangan 1</h4>
            <a href="#/list-ground-page" class="detail-button">Detail Lapangan</a>
        </div>
    </div>
    <div class="ground-box">
        <div class="ground-image">
            <img src="lapangan2.jpg" alt="Lapangan 2">
        </div>
        <div class="ground-info">
            <h4>Nama Lapangan 2</h4>
            <a href="#/list-ground-page" class="detail-button">Detail Lapangan</a>
        </div>
    </div>
    <!-- Tambahkan kotak-kotak lainnya sesuai dengan jumlah lapangan populer -->
</div>


      
    `;
    },

    async afterRender() {
        // kode setelah render disini
    },
};

export default HomePage;