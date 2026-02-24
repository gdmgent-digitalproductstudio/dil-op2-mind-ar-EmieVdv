document.addEventListener("DOMContentLoaded", () => {
  const band1 = document.querySelector("#band1");
  const band2 = document.querySelector("#band2");
  const button = document.querySelector("#toggleBand");

  let showFirst = true;

  band1.setAttribute("visible", showFirst);
  band2.setAttribute("visible", !showFirst);

  button.addEventListener("click", () => {
    showFirst = !showFirst;

    band1.setAttribute("visible", showFirst);
    band2.setAttribute("visible", !showFirst);
  });
});