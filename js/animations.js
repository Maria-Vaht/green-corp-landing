const INCREASE_NUMBER_ANIMATION_SPEED = 40;


function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber)
      element.innerText = i + "+";
    else
      element.innerText = i;
  }
  i += 100;
  setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNumber);
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  let i = 0;
  let endNumber = 5000;
  increaseNumberAnimationStep(i, element, endNumber);
}


let animationInited = false;

function updateScroll() {
  if (window.scrollY) {
    document.querySelector("header").classList.add("header__scrolled");
  }
  else {
    document.querySelector("header").classList.remove("header__scrolled");
  }

  let windowBottomPosition = window.scrollY + window.innerHeight;
  let countElementPosition = document.querySelector(".features__clients-count").offsetTop;
  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}

window.addEventListener("scroll", updateScroll);


document.querySelector("#budget").addEventListener("change", function handleSelectChange(event) {
  if (event.target.value === "other") {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form__group");
    formContainer.classList.add("form__other-input");

    const input = document.createElement("input");
    input.placeholder = "Enter your option";
    input.type = "text";

    formContainer.appendChild(input);
    document.querySelector(".form form").insertBefore(formContainer, document.querySelector(".form__submit"));
  }
  else {
    const otherInput = document.querySelector(".form__other-input");
    if (otherInput) {
      document.querySelector(".form form").removeChild(otherInput);
    }
  }
});


function addSmoothScroll(anchor) {
  anchor.addEventListener("click", event => {
    event.preventDefault();
    document.querySelector(event.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  })
}

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  addSmoothScroll(anchor);
})

addSmoothScroll(document.querySelector(".more-button"));


document.querySelector(".form__block").addEventListener("submit", function handleSubmit(event) {
  event.preventDefault()
})
