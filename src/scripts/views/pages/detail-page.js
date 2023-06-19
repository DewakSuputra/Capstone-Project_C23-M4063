async function getPost() {
  const res = await fetch('https://run.mocky.io/v3/0e3cec4f-0553-44bd-b038-86078a862af4');
  const data = await res.json();
  console.log(data);
  return data;
}

const DetailPage = {
  async render() {
    return `
      <div class="detail-page">
        <div class="lapangan-container"></div>
        <section class="top">
          <h2 class="fasilitas">Fasilitas Lapangan Bulutangkis</h2>
          <div class="gallery">
            <div class="gallery-item">
              <img src="lapangan1.png" alt="">
            </div>
            <div class="gallery-item">
              <img src="lapangan2.jpg" alt="">
            </div>
            <div class="gallery-item">
              <img src="lapangan3.jpg" alt="">
            </div>
            <div class="gallery-item">
              <img src="lapangan4.jpg" alt="">
            </div>
          </div>
          <div class="map-container">
            <div class="map"></div>
          </div>
        </section>
        <button class="pesan">
          <a href="https://api.whatsapp.com/send?phone=6281234567890" class="whatsapp-button">Pesan Sekarang</a>
        </button>
      </div>
    `;
  },

  async afterRender() {
    const lapanganContainer = document.querySelector('.lapangan-container');
    const mapContainer = document.querySelector('.map-container');

    const data = await getPost();
    const detail = data.grounds.slice(0, 1);

    detail.forEach((post) => {
      const lapanganInfo = document.createElement('div');
      lapanganInfo.classList.add('lapangan-info');
      const facilityDetails = post.facility.map((facility) => facility.name).join(', ');
      lapanganInfo.innerHTML = `
        <div class="coba">
          <div class="lapangan-info">
            <h2 class="lapangan-nama">${post.name}</h2>
            <p class="lapangan-deskripsi">${post.descriptions}<br>${facilityDetails}</p>
            <div class="harga"><b>Harga Hanya: 40.000/Jam</b></div>
          </div>
          <img class="lapangan-gambar" src="lapangan1.png" alt="Gambar Lapangan A">
        </div>
      `;

      const map = document.createElement('iframe');
      map.src = `${post.maps}`;
      map.width = 600;
      map.height = 450;
      map.style.border = '0';
      map.allowFullscreen = true;
      map.loading = 'lazy';
      map.referrerPolicy = 'no-referrer-when-downgrade';

      lapanganContainer.appendChild(lapanganInfo);
      mapContainer.appendChild(map);
    });
  },
};

export default DetailPage;
