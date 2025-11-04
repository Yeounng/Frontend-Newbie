const shareButton = document.querySelector(".sns-share");

shareButton.addEventListener("click", function () {
  let shareActiveMobile = document.querySelector(".sns-share");
  let shareActive = document.querySelector(".share-popup");
  shareActiveMobile.classList.toggle("active");
  shareActive.classList.toggle("active");
});
