import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  header: document.querySelector('#headerContent'),
  content: document.querySelector('#mainContent'),
  footer: document.querySelector('#footerContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
