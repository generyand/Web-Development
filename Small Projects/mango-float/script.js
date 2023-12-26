const textRespond = document.querySelector(".text-respond");
const buttons = document.querySelectorAll(".button");
const buyBtn = document.querySelector(".buy-btn");

for (const button of buttons) {
  button.addEventListener("click", () => {
    buyBtn.classList.add("active");
    for (const btn of buttons) {
      btn.classList.remove("clicked");
    }

    button.classList.add("clicked");
  });
}

buyBtn.addEventListener("click", () => {
  for (const button of buttons) {
    if (button.classList.contains("clicked")) {
        textRespond.innerHTML = `You bought a ${button.value}`;
    }
  }

  buyBtn.classList.remove("active");


});
