var scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = () => {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    scrollToTop.style.transform = "translate3d(0, 0, 0)";
  } else {
    scrollToTop.style.transform = "translate3d(100px, 0, 0)";
  }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollToTop.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// navbar-toggle animation

var hamBtn = document.querySelector(".hamburger");
var navbar = document.querySelector(".navbar");

hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("active");
  navbar.classList.toggle("active");
});

// onclick="this.classList.toggle('active')"
