window.addEventListener('load', function () {
  setTimeout(hideSplash, 1000);
});

function hideSplash() {
  const splashContainer = document.querySelector('.splash-container');
  splashContainer.style.display = 'none';

  const mainContent = document.querySelector('.main-content');
  mainContent.style.display = 'block';
}