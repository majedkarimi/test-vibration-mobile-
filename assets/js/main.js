const btn = document.querySelector(".vibrate");
btn.addEventListener("click", () => {
  window.navigator.vibrate(100);
  console.log("mj");
});
