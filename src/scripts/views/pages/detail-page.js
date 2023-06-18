async function getPost() {
  const res = await fetch('https://run.mocky.io/v3/0e3cec4f-0553-44bd-b038-86078a862af4');
  const data = await res.json();
  console.log(data);
  return data;
}

const DetailPage = {
  async render() {
    return `
            <div class="lapangan-container"></div>
            <section class="map top"></section>
            <button href="#" class="pesan"><a href="https://api.whatsapp.com/send?phone=6281234567890" class="whatsapp-button">Pesan Sekarang</a></button>
        `;
  },

  async afterRender() {
    const lapanganContainer = document.querySelector('.lapangan-container');

    const data = await getPost();
    const detail = data.grounds.slice(0, 1);

    detail.forEach((post) => {
      const lapanganInfo = document.createElement('div');
      lapanganInfo.classList.add('lapangan-info');
      const facilityDetails = post.facility.map((facility) => facility.name);
      lapanganInfo.innerHTML = `
      <div class="lapangan-container">
        <div class="lapangan-info">
          <h2 class="lapangan-nama">${post.name}</h2>
          <p class="lapangan-deskripsi"> ${post.descriptions}:<br>
          ${facilityDetails}
          </p>
          <div class="harga"><b>Harga Hanya : 40.000/Jam</b></div>
        </div>
        <img class="lapangan-gambar" src="${post.picture}" alt="${post.name}">
      </div>
        `;
      const fasilitas = document.createElement('div');
      fasilitas.classList.add('fasilitas');
      fasilitas.innerHTML = `
      <div class="fasilitas">
        <h1>Fasilitas Lapangan Bulu Tangkis</h1>
            <div class="gallery">
                <div class="gallery-item">
                <img src="${post.picture}" alt="${post.name}">
                </div>
                <div class="gallery-item">
                <img src="${post.picture}" alt="${post.name}">
                </div>
                <div class="gallery-item">
                <img src="${post.picture}" alt="${post.name}">
                </div>
                <div class="gallery-item">
                <img src="${post.picture}" alt="${post.name}">
                </div>
            </div>
        </div>
      </div>     
        `;

      const gallery = document.createElement('div');
      gallery.classList.add('gallery');
      gallery.innerHTML = `
        <div class="gallery-item">
        <img src="${post.picture}" alt="${post.name}">
        </div>
        <div class="gallery-item">
        <img src="${post.picture}" alt="${post.name}">
        </div>
        <div class="gallery-item">
        <img src="${post.picture}" alt="${post.name}">
        </div>
        <div class="gallery-item">
        <img src="${post.picture}" alt="${post.name}">
        </div>
    </div>
    
        `;

      const mapTop = document.querySelector('.map.top');
      const map = document.createElement('iframe');
      map.src = `${post.maps}`;
      map.width = 600;
      map.height = 450;
      map.style.border = 0;
      map.allowFullscreen = true;
      map.loading = 'lazy';
      map.referrerPolicy = 'no-referrer-when-downgrade';

      lapanganContainer.appendChild(lapanganInfo);
      lapanganContainer.appendChild(fasilitas);
      lapanganContainer.appendChild(gallery);
      mapTop.appendChild(map);
    });
  },
};
export default DetailPage;
