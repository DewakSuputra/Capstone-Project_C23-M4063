async function getPost() {
  const res = await fetch('https://run.mocky.io/v3/0e3cec4f-0553-44bd-b038-86078a862af4');
  const data = await res.json();
  console.log(data);
  return data;
}

const ListGroundPage = {
  async render() {
    return `
      <section class="list-ground">
        <input type="text" class="search-input" name="query" placeholder="Search"/>
        <div class="court-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const courtList = document.querySelector('.court-list');
    const searchInput = document.querySelector('.search-input');

    const data = await getPost();
    let lapangan = data.grounds;

    const renderCourtList = () => {
      courtList.innerHTML = '';

      lapangan.forEach((post) => {
        const courtItem = document.createElement('div');
        courtItem.classList.add('court-item');
        courtItem.innerHTML = `
          <div class="court-item">
            <img src="${post.picture}" alt="${post.name}" class="court-image" />
            <h2 class="court-name">${post.name}</h2>
            <p class="court-description">${post.descriptions}</p>
            <button class="schedule-button"><a href="#/detail-page">Lihat Detail</a></button>
          </div>
        `;

        courtList.appendChild(courtItem);
      });
    };

    renderCourtList();
    searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();

      if (searchTerm === '') {
        lapangan = data.grounds;
      } else {
        lapangan = data.grounds.filter((post) => post.name.toLowerCase().includes(searchTerm));
      }
      renderCourtList();
    });
  },
};

export default ListGroundPage;
