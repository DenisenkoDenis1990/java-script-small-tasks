let nameInputEl = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  nameOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameOutput.textContent = "Anonymous";
  }
});
