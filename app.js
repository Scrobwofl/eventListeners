console.log("Connectado...");

const buttonOne = document.querySelector("#hard-truth-one");
const buttonTwo = document.querySelector("#hard-truth-two");

const containerOne = document.querySelector("#hard-truth-one-output");
const containerTwo = document.querySelector("#hard-truth-two-output");

buttonOne.addEventListener("click", () => {
  console.log("You clicked the first button");
  if (containerTwo.classList.contains("visible")) {
    containerTwo.classList.remove("visible");
    containerOne.classList.toggle("visible");
    body.classList.toggle("page-height-change");
  } else {
    containerOne.classList.toggle("visible");
    body.classList.toggle("page-height-change");
  }
});

buttonTwo.addEventListener("click", () => {
  console.log("You clicked the second button");
  if (containerOne.classList.contains("visible")) {
    containerOne.classList.remove("visible");
    containerTwo.classList.toggle("visible");
    body.classList.toggle("page-height-change");
  } else {
    containerTwo.classList.toggle("visible");
    body.classList.toggle("page-height-change");
  }
});
