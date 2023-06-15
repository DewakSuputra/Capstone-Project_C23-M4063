const ListGroundPage = {
  async render() {
    return `
          <section class="list-ground">
              
              <input type="text" class="search-input" name="query" placeholder="Search"/>
              <div class="court-list">
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 1" class="court-image" />
                  <h2 class="court-name">Lapangan 1</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 1.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 2" class="court-image" />
                  <h2 class="court-name">Lapangan 2</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 2.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 3" class="court-image" />
                  <h2 class="court-name">Lapangan 3</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 3.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 4" class="court-image" />
                  <h2 class="court-name">Lapangan 4</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 4.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
              <img src="lapangan1.png" alt="Lapangan 1" class="court-image" />
              <h2 class="court-name">Lapangan 1</h2>
              <p class="court-description">Deskripsi lapangan bulu tangkis 1.</p>
              <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 2" class="court-image" />
                  <h2 class="court-name">Lapangan 2</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 2.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 3" class="court-image" />
                  <h2 class="court-name">Lapangan 3</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 3.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
              <div class="court-item">
                  <img src="lapangan1.png" alt="Lapangan 4" class="court-image" />
                  <h2 class="court-name">Lapangan 4</h2>
                  <p class="court-description">Deskripsi lapangan bulu tangkis 4.</p>
                  <button class="schedule-button">Lihat Jadwal</button>
              </div>
          </div>
          </section> 
      `;
  },

  async afterRender() {
    // kode setelah render disini
  },
};

export default ListGroundPage;
