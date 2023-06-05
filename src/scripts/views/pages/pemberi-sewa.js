const PemberiSewa = {
    async render() {
        return `
        <section class="pemberi-sewa">
            <h1>Pemberi Sewa?</h1>
        </section>
<div class="form-box">
  <form>
    <div class="form-group">
      <label for="nama-lapangan">Nama Lapangan</label>
      <input type="text" id="nama-lapangan" name="nama-lapangan">
    </div>
    <div class="form-group">
      <label for="alamat">Alamat</label>
      <input type="text" id="alamat" name="alamat">
    </div>
    <div class="form-group">
      <label for="deskripsi">Deskripsi</label>
      <textarea id="deskripsi" name="deskripsi"></textarea>
    </div>
    <div class="form-group">
      <label for="kontak">Kontak</label>
      <input type="text" id="kontak" name="kontak">
    </div>
    <div class="form-group">
      <label for="harga">Harga/Jam</label>
      <input type="text" id="harga" name="harga">
    </div>
   <div class="form-group">
  <label for="waktuMulai">Waktu Mulai</label>
  <input type="time" id="waktuMulai" name="waktuMulai">
</div>

<div class="form-group">
  <label for="waktuSelesai">Waktu Selesai</label>
  <input type="time" id="waktuSelesai" name="waktuSelesai">
</div>


<div class="form-group">
  <label for="fasilitas">Fasilitas</label>
  <input type="text" id="fasilitas" name="fasilitas" placeholder="Masukkan fasilitas">
</div>


    <div class="form-group">
      <label for="foto">Upload Foto</label>
      <input type="file" id="foto" name="foto">
    </div>
    <button type="submit" class="submit-button">Submit</button>
  </form>
</div>



    `;
    },

    async afterRender() {
        // kode setelah render disini
    },
};

export default PemberiSewa;