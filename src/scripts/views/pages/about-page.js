const AboutPage = {
    async render() {
        return `
        <section class="detail-page">
            <h2>	About Us</h2>
        </section>
        <section class="about">
            <div class="about-image">
              <img src="about-image.jpg" alt="Gambar About Us">
           </div>
          <div class="about-text">
    
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor mauris a massa ultrices malesuada. Suspendisse eget lectus nec erat condimentum viverra. Fusce efficitur auctor massa, in consectetur magna tincidunt vel. Sed scelerisque, velit vitae tincidunt scelerisque, sapien velit fringilla erat, eu consequat ipsum ipsum sed dolor.</p>
            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed gravida tellus ut fringilla cursus. Nunc varius sem at arcu tristique lobortis. Morbi id magna et odio aliquet eleifend. In vestibulum lorem mi, nec dignissim sem consectetur eu. Nulla facilisi. Vestibulum rutrum lorem sit amet pharetra fermentum.</p>
          </div>
        </section>
       `;
    },

    async afterRender() {
        // kode setelah render disini
    },
};

export default AboutPage;