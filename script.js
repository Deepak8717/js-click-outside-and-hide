document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const banner = document.querySelector(".banner");

  //global open/close functions
  const open = () => {
    button.classList.add("open-button");
    banner.classList.add("open-banner");
  };
  const close = () => {
    button.classList.remove("open-button");
    banner.classList.remove("open-banner");
  };
  button.addEventListener("mousedown", () => {
    if (!button.classList.contains("open-button")) {
      open();
    } else {
      close();
    }
  });
  // Close when user click outside
  document.body.addEventListener("mousedown", (e) => {
    let isClickInsideButton = button.contains(e.target);
    let isClickInsideBanner = banner.contains(e.target);
    if (!isClickInsideButton && !isClickInsideBanner) {
      close();
    }
  });
});
