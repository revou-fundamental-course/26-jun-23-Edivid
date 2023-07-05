// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//

function submitBannerForm(event) {
  event.preventDefault();
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}

//
function scrollToBannerForm() {
  document.querySelector("#bannerForm").scrollIntoView({ behavior: "smooth" });
}
