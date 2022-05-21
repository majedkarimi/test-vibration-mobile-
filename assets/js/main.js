const btn = document.querySelector(".vibrate");
btn.addEventListener("click", () => {
  window.navigator.vibrate(200);
  console.log("mj");
});
