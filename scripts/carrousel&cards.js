const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

/* Pa tarjetas */
const cards = document.querySelectorAll(".card");

const lastClicked = {
  id: 0,
  text: "",
};

function checkSelected() {
  cards.forEach((card) => {
    card.classList.remove("active");
    card.style.gridTemplateRows = `80% 20%`;
    if (card.id == lastClicked.id) {
      card.innerHTML = lastClicked.text;
    }
  });
}

function myText(object) {
  var text = "";
  object.forEach((item) => {
    text += `${item}`;
  });
  return text;
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    checkSelected();
    lastClicked.id = card.id;
    lastClicked.text = card.innerHTML;
    card.classList.toggle("active");
    switch (card.id) {
      case "JavaScript":
        card.style.gridTemplateRows = `repeat(${JavaScript.length},${
          100 / JavaScript.length
        }%)`;
        card.innerHTML = myText(JavaScript);
        break;
      case "Csharp":
        card.style.gridTemplateRows = `repeat(${Csharp.length},${
          100 / Csharp.length
        }%)`;
        card.innerHTML = myText(Csharp);
        break;
      case "Java":
        card.style.gridTemplateRows = `repeat(${Java.length},${
          100 / Java.length
        }%)`;
        card.innerHTML = myText(Java);
        break;
    }
    //if day, set colors
    $(".card.active a").hover(
      function () {
        $(this).css(
          "background-color",
          day ? "rgb(255,255,255)" : "rgb(0,0,0)"
        );
        $(this)
          .children()
          .css("color", !day ? "rgb(255,255,255)" : "rgb(0,0,0)");
      },
      function () {
        $(this).css(
          "background-color",
          !day ? "rgb(255,255,255)" : "rgb(0,0,0)"
        );
        $(this)
          .children()
          .css("color", day ? "rgb(255,255,255)" : "rgb(0,0,0)");
      }
    );
    $(".card.active a")
      .children()
      .css("color", !day ? "rgb(0,0,0)" : "rgb(255,255,255)");
      
  });
});

var Csharp = [
  '<a target="_blank" href="https://github.com/Chenomorfo/School-Csharp"><h3>School Projects</h3></a>',
  "Unity Projects",
];
var JavaScript = [
  '<a target="_blank" href="https://github.com/Chenomorfo/HernandezVI"><h3>School Projects</h3></a>',
  '<a target="_blank" href="https://github.com/Chenomorfo/CssIdeas"><h3>CSS/JS Projects</h3></a>',
  "Personal Projects",
];
var Java = ["School Projects (NetBeans)"];
