const ListGroundPage = {
    async render() {
        return `
        <section class="list-ground">
            <h2>List Ground Pages</h2>
        </section>
<section class="list-ground">
  <div class="ground-box">
    <div class="ground-image">
      <img src="foto-lapangan1.jpg" alt="Foto Lapangan 1">
    </div>
    <div class="ground-info">
      <h4>Gedung Dua Rizky</h4>
      <p>Guntungmanggis, Landasan Ulin, Banjarbaru City, South Kalimantan 70714</p>
      <a href="#" class="jadwal-button">Lihat Jadwal</a>
    </div>
  </div>
  <!-- Tambahkan kotak-kotak lainnya sesuai dengan jumlah lapangan -->
</section>


    `;
    },

    async afterRender() {
        // kode setelah render disini
    },
};

export default ListGroundPage;