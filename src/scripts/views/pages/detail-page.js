const DetailPage = {
    async render() {
        return `
        <div class="lapangan-container">
            <div class="lapangan-info">
            <h2 class="lapangan-nama">Gedung Dua Rizky </h2>
            <p class="lapangan-deskripsi">
            Gedung Dua Rizky adalah sebuah fasilitas olahraga yang menyediakan lapangan badminton untuk para pemain dan penggemar olahraga ini. Lapangan badminton di Gedung Dua Rizky merupakan jenis lapangan indoor yang dirancang khusus untuk bermain badminton.
            Gedung Dua Rizky juga menyediakan fasilitas pendukung yang nyaman dan lengkap, seperti :<br>
            1. Lapangan berukuran 30 x 12 <br>
            2. Pencahayaan yang memadai <br>
            3. Sistem ventilasi yang baik <br>
            4. Tempat duduk untuk penonton <br>
            5. Toilet 
            </p>
            <div class="harga"><b>Harga Hanya : 40.000/Jam</b></div>
            </div>
            <img class="lapangan-gambar" src="lapangan1.png" alt="Gambar Lapangan A">
        </div>

       <div class="fasilitas">
        <h1>Fasilitas Lapangan Bulu Tangkis</h1>
        <div class="gallery">
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 1">
            </div>
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 2">
            </div>
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 3">
            </div>
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 1">
            </div>        
        </div>
        <div class="gallery">
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 1">
            </div>
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 2">
            </div>
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 3">
            </div>
            <div class="gallery-item">
            <img src="lapangan1.png" alt="Gambar 1">
            </div>
           
        </div>
       </div>

        <section class="map top">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63107.01652812419!2d115.1032686!3d-8.6736135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24738739cd719%3A0x2855ece643da18bd!2sLapangan%20Bulu%20Tangkis%20Sidharta!5e0!3m2!1sid!2sid!4v1686889624410!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>


        <button href="#" class="pesan">Pesan Sekarang</button>


       `;
    },

    async afterRender() {
        // kode setelah render disini
    },
};

export default DetailPage;