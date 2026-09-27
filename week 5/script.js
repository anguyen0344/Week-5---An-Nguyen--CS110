const tipButton = document.querySelector("#tip-button");
const tipResult = document.querySelector("#tip-result");

if (tipButton && tipResult) {
  tipButton.addEventListener("click", () => {
    tipResult.textContent =
      "Beginner tip: Try changing one thing at a time, then check the result.";
  });
}