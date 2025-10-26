  const gallery = document.getElementById("gallery");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  rightBtn.addEventListener("click", () => {
    gallery.scrollBy({ left: 300, behavior: "smooth" });
  });

  leftBtn.addEventListener("click", () => {
    gallery.scrollBy({ left: -300, behavior: "smooth" });
  });
