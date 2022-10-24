$(document).ready(function () {
  var Iused, Iknow, Iwant;

  Iused = $("#Iused")
    .children("div")
    .each((i) => {
      return i;
    });

  Iknow = $("#Iknow")
    .children("div")
    .each((i) => {
      return i;
    });
  Iwant = $("#Iwant")
    .children("div")
    .each((i) => {
      return i;
    });
    mindMap(Iused);
    mindMap(Iknow);
    mindMap(Iwant);

  $(window).resize(function () { 
    mindMap(Iused);
    mindMap(Iknow);
    mindMap(Iwant);
  });

});

function toDegrees(grades) {
  return grades * (Math.PI / 180);
}

function changeLocation(grades, actual) {
  let Y = -Math.cos(toDegrees(grades));
  let X = Math.sin(toDegrees(grades));
  if(window.innerWidth <515){
    var pos = {
      x: 90 * X,
      y: 90 * Y,
    };
  }else{
    var pos = {
      x: 150 * X,
      y: 150 * Y,
    };  
  }
  
  actual.style.transform = `translate(${pos.x}px,${pos.y}px)`;
}

function mindMap(elem) {
  var grades = parseFloat(360 / elem.length);
  var initial = 0;
  for (let i = 0; i < elem.length; i++) {
    changeLocation(initial, elem[i]);
    initial += grades;
  }
}

function animation(actived) {
  elems = $(`#${actived} > .planet`).each(function (elem) {
    return elem;
  });

  for (let i = 0; i < elems.length; i++) {
    if (!clicked) {
      elems[i].style.opacity = "1";

      elems[i].style.animation = "OriginToHome 0.5s";
    } else {
      elems[i].style.opacity = "0";
      elems[i].style.animation = "HomeToOrigin 0.5s";
    }
  }
  clicked = !clicked;
}

var clicked = false;
var selected;

$(".Sun").click(function () {

  if (selected == this.id) {
    animation(selected);
  } else {
    if (clicked) {
      animation(selected);
    }
    selected = this.id;
    animation(selected);
  }
});
