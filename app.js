// Menu Shrink
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth > 991.98) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('headerContainer').style.marginTop = '0px';
      document.getElementById('navigation').style.height = '105px';
      document.querySelector('.brandImage').style.height = '100px';
    } else {
      document.getElementById('headerContainer').style.marginTop = null;
      document.getElementById('navigation').style.height = null;
      document.querySelector('.brandImage').style.height = null;
    }
  }
}

// Scroll To Products
const toProducts = document
  .getElementById('toProducts')
  .addEventListener('click', () => {
    if (window.innerWidth <= 575.98) {
      window.scrollBy({ top: 485, left: 0, behavior: 'smooth' });
    }
    if (window.innerWidth >= 576 && window.innerWidth <= 767.98) {
      window.scrollBy({ top: 475, left: 0, behavior: 'smooth' });
    }
    if (window.innerWidth >= 768 && window.innerWidth <= 991.98) {
      window.scrollBy({ top: 525, left: 0, behavior: 'smooth' });
    }
    if (window.innerWidth >= 992) {
      window.scrollBy({ top: 800, left: 0, behavior: 'smooth' });
    }
  });

// Back To Top
const button = document.querySelector('.backToTop');
document.onscroll = function (e) {
  if (window.scrollY > 560) {
    button.style.display = 'block';
  } else if (window.scrollY < 560) {
    button.style.display = 'none';
  }
};
button.addEventListener('click', () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});
