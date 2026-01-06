const rates = document.querySelectorAll(".rates-item");
const userRate = document.querySelector(".user-rate");
const button = document.querySelector(".rating-submit");
let selectedRate = 0;

rates.forEach((item) => {
  item.addEventListener("click", (e) => {
    rates.forEach((element) => element.classList.remove("clicked"));

    const clickedRates = document.querySelector(".rates-item.clicked");
    e.target.classList.add("clicked");

    selectedRate = Number(e.target.dataset.selectedRates);
    userRate.textContent = " " + selectedRate;

    button.classList.remove("error");
    button.textContent = "Submit";
  });
});

button.addEventListener("click", () => {
  const clickedRates = document.querySelector(".rates-item.clicked");

  if (!clickedRates) {
    button.classList.add("error");
    button.textContent = "Please Select One";
    return;
  }
  if (clickedRates) {
    const mainContent = document.querySelector(".rating-main");
    mainContent.classList.add("hidden");

    const thxMsg = document.querySelector(".submit-state");
    thxMsg.classList.add("active");
  }
});
