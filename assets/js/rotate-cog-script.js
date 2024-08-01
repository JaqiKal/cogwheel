document.querySelectorAll(".cog").forEach((cog) => {
  cog.addEventListener("click", function () {
    const angle = -72 * Array.from(cog.parentElement.children).indexOf(cog);
    cog.parentElement.style.transform = `rotate(${angle}deg)`;

    setTimeout(() => {
      window.location.href = cog.getAttribute("data-link");
    }, 500);
  });
});
