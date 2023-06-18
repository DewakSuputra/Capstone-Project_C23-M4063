async function getpost() {
  const res = await fetch('https://run.mocky.io/v3/0e3cec4f-0553-44bd-b038-86078a862af4');
  const data = await res.json();
  console.log(data);
  return data;
}

const HomePage = {
  async render() {
    return `
    <div class="headercont"></div>
    <div class="header-home"></div>
  
<div class="text">
    <div class="about-container">
        <div class="about-image">
            <img src="./img/aboutus.png"" alt="Gambar">
        </div>
        <div class="about-text" id="about">
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
<section class="list-ground" id="list-ground-page">       
  <div class="court-grid"></div>
</section>
  <a href="#/list-ground-page" class="read-more-button">Read More</a>
</div>
      
    `;
  },

  async afterRender() {
    const listGround = document.querySelector('.list-ground');

    const data = await getpost();
    const dataSlice = data.grounds.slice(0, 4);

    dataSlice.forEach((post) => {
      const courtList = document.createElement('div');
      courtList.classList.add('court-grid');
      courtList.innerHTML = `
        
        <div class="court-item">
          <img src="${post.picture}" alt="${post.name}" class="court-image" />
          <h2 class="court-name">${post.name}</h2>
          <p class="court-description">${post.descriptions}</p>
          <button class="schedule-button"><a href="#/detail-page">Lihat Detail</a><button>
        </div>
        `;

      listGround.appendChild(courtList);
    });
  },
};

export default HomePage;
