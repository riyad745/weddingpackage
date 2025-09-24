window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";
    loader.style.visibility = "hidden";
  }, 1500); 
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tab = btn.getAttribute("data-tab");

    document.querySelectorAll(".packages").forEach((sec) =>
      sec.classList.remove("active")
    );

    document.querySelectorAll(".tab-btn").forEach((b) =>
      b.classList.remove("active")
    );

    document.getElementById(tab).classList.add("active");
    e.target.classList.add("active");
  });
});
