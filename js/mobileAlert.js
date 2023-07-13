const bannerTimer = document.getElementById("banner-timer");
const descriptionSection = document.getElementById("header");
const headerSection = document.getElementById("header");
const fixedDiv = document.getElementById("mobile-alert");
function handleScroll() {
  const descriptionRect = descriptionSection.getBoundingClientRect();
  const headerRect = headerSection.getBoundingClientRect();

  if (
    (descriptionRect.bottom <= 0 ||
      descriptionRect.top >= window.innerHeight) &&
    (headerRect.bottom <= 0 || headerRect.top >= window.innerHeight)
  ) {
    fixedDiv.style.display = "block";
    bannerTimer.style.display = "none";
  } else {
    fixedDiv.style.display = "none";
    bannerTimer.style.display = "block";
  }
}

window.addEventListener("DOMContentLoaded", function () {
  fixedDiv.style.display = "none";
});

window.addEventListener("scroll", handleScroll);
