const HomePage = {
    async render() {
        return `
    <div class="headercont">
    <div class="header-home">
       
        
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
        <a href="#/home-page" class="read-more-button">Read More</a>
        
 </div>
    </div>

</div>


<div class="alur-title">
    <h3>Alur Pemesanan</h3>
</div>     
<div class="booking-flow">
<div class="booking-step">
        <div>
            <div class="step-icon">Cari Lapangan</div>
            <img src="./img/cari_lapangan.png" alt="CaraLapangan">
        </div>
        <div>
            <div class="step-icon">Pilih Lapangan</div>
            <img src="./img/pilih_lapangan.png" alt="PilihLapangan">
        </div>
        <div>
            <div class="step-icon">Lihat Jadwal</div>
            <img src="./img/lihat_jadwal.png" alt="LihatJadwal">
        </div>
        <div>
            <div class="step-icon">Chat WhatsApp</div>
            <img src="./img/chat_wa.png" alt="ChatWa">
        </div>
    </div>
</div>

<div class="popular-title">
        <h3>Lapangan Populer</h3>
</div>
<div class="popular-grounds">
 <section class="list-ground">
            
                    <div class="court-list">
            <div class="court-item">
                <img src="lapangan1.png" alt="Lapangan 1" class="court-image" />
                <h2 class="court-name">Lapangan 1</h2>
                <p class="court-description">Deskripsi lapangan bulu tangkis 1.</p>
                <button class="schedule-button"><a href="#/detail-page" >Lihat Jadwal</a><button>
            </div>
            <div class="court-item">
                <img src="lapangan1.png" alt="Lapangan 2" class="court-image" />
                <h2 class="court-name">Lapangan 2</h2>
                <p class="court-description">Deskripsi lapangan bulu tangkis 2.</p>
                <button class="schedule-button"><a href="#/detail-page" >Lihat Jadwal</a><button>
            </div>
            <div class="court-item">
                <img src="lapangan1.png" alt="Lapangan 3" class="court-image" />
                <h2 class="court-name">Lapangan 3</h2>
                <p class="court-description">Deskripsi lapangan bulu tangkis 3.</p>
                <button class="schedule-button"><a href="#/detail-page" >Lihat Jadwal</a><button>
            </div>
            <div class="court-item">
                <img src="lapangan1.png" alt="Lapangan 4" class="court-image" />
                <h2 class="court-name">Lapangan 4</h2>
                <p class="court-description">Deskripsi lapangan bulu tangkis 4.</p>
                <button class="schedule-button"><a href="#/detail-page" >Lihat Jadwal</a><button>
            </div>
        </div>
       </section>
      <a href="#/list-ground-page" class="read-more-button">Lihat Lebih Banyak</a>
</div>


      
    `;
    },

    async afterRender() {
        // kode setelah render disini
    },
};

export default HomePage;