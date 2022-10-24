//global vars & consts
const nightColors = {
  c1: "rgb(63, 78, 79)",
  c2: "rgb(44, 54, 57)",
  c3: "rgb(162, 123, 92)",
  c4: "rgb(220, 215, 201)",
  text1: "rgb(255, 255, 255)",
  text2: "rgb(0, 0, 0)",
};
const dayColors = {
  c1: nightColors.c4,
  c2: nightColors.c3,
  c3: nightColors.c2,
  c4: nightColors.c1,
  text1: nightColors.text2,
  text2: nightColors.text1,
};

const aboutMe = document.createElement("div");
aboutMe.innerHTML = `
<script>
  if (day) {
    document.querySelector("p").style.color = "black";
  } else {
    document.querySelector("p").style.color = "white";
  }
</script>
<p>
  I'm a Computer Systems student, but most of my knowledge was learned outside
  of school; reading documentation, relying on internet videos, and analyzing
  code from other programmers.

  <br /><br />
  I don't have work experience focused on programming, but I try to practice
  doing personal projects, either for fun and showing friends my results, or to
  make certain things easier for me.

  <br /><br />
  I learn more hands on, mostly by trial and error, doing example exercises ,
  and/or altering a code to experiment with. I can get stuck sometimes, maybe
  it's a mistake to try to learn more than one language at the same time, but I
  feel comfortable trying to learn more than one thing so it doesn't feel so
  monotonous.

  <br /><br />
  I would like to further challenge myself in web development to acquire the
  skills necessary in order to deliver the best results in certain projects,
  mainly focusing on video game creation for the time being. I am, however open
  to learning many new things as times goes on.
</p>

`;
const jsonAboutMe = document.createElement("div");
jsonAboutMe.innerHTML = `
<style>
  span {
    color: aquamarine;
  }
</style>
<script>
  var p = document.querySelectorAll("p");
  p.forEach((i) => {
    if (day) {
      i.style.color = "black";
    } else {
      i.style.color = "white";
    }
    i.children[0].style.color = "aquamarine";
  });
</script>
<p>{ <span>"occupation"</span>: "student",</p>
<p><span>"age"</span>: 20,</p>
<p>
  <span>"hard_skills"</span>: ["Data structures", "OOP", "Database & SQL",
  "IDEs", "Text editors", "Web Dev"],
</p>
<p>
  <span>"soft_skills"</span>: ["Empathy", "Curiosity", "Problem solving",
  "Adaptability", "Patience"],
</p>
<p>
  <span>"hobbies"</span>: ["Basketball", "Volleyball", "Chess", "Table Games",
  "Videogames"],
</p>
<p><span>"where_am_I"</span>: "Mexico",</p>
<p><span>"coding_since"</span>: "2018 - Now" }</p>`;

var day = false;
var json = false;
var navBar = true;

//change to oposite color
function changeColors(elem) {
  var bkc = window
    .getComputedStyle(elem, null)
    .getPropertyValue("background-color");

  var color = window.getComputedStyle(elem, null).getPropertyValue("color");

  switch (bkc) {
    case nightColors.c1:
      elem.style.backgroundColor = dayColors.c1;
      break;
    case nightColors.c2:
      if (elem.classList.contains("Sun")) {
        $(elem).hover(
          function () {
            elem.style.backgroundColor = dayColors.c1;
          },
          function () {
            elem.style.backgroundColor = dayColors.c2;
          }
        );
      }
      elem.style.backgroundColor = dayColors.c2;

      break;
    case nightColors.c3:
      if (elem.classList.contains("Sun")) {
        $(elem).hover(
          function () {
            elem.style.backgroundColor = dayColors.c4;
          },
          function () {
            elem.style.backgroundColor = dayColors.c3;
          }
        );
      }

      elem.style.backgroundColor = dayColors.c3;
      break;
    case nightColors.c4:
      elem.style.backgroundColor = dayColors.c4;
      break;

    case nightColors.text1:
      elem.style.backgroundColor = dayColors.text1;
      break;
    case nightColors.text2:
      elem.style.backgroundColor = dayColors.text2;
      break;
  }

  switch (color) {
    case nightColors.text1:
      elem.style.color = dayColors.text1;
      break;
    case nightColors.text2:
      elem.style.color = dayColors.text2;
      break;
  }
}

$(document).ready(function () {
  //load defaults

  $("#includedAboutMe").html(aboutMe.innerHTML);

  $("#checkInfo").css("background-color", "#4040ff");
  $("#checkInfo").on("click", function () {
    json = !json;
    if (json) {
      $("#checkInfo span").css("left", "3%");
      $("#checkInfo").css("background-color", "#13B3AC");
      $("#includedAboutMe").html(jsonAboutMe.innerHTML);
    } else {
      $("#checkInfo span").css("left", "59%");
      $("#checkInfo").css("background-color", "#4040ff");
      $("#includedAboutMe").html(aboutMe.innerHTML);
    }
  });

  //Day - Night button
  $("#DayNight button").click(function (e) {
    //Disable button around 1.5s, avoid bugs
    $("#DayNight button").prop("disabled", true);
    setTimeout(() => {
      $("#DayNight button").prop("disabled", false);
    }, 1500);
    //is day?
    day = !day;
    var elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      changeColors(elements[i]);
    }
    //special for border of contact section

    $("#DayNight button span").css("left", day ? "3%" : "59%");
    $(".ContactMe > form")
      .children()
      .css("border", day ? "3px solid black" : "3px solid white");
    $(".ContactMe > form > button").hover(
      function () {
        $(this).css(
          "background-color",
          day ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)"
        );
        $(this).css("color", day ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)");
      },
      function () {
        $(this).css("background-color", "unset");
        $(this).css("color", day ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)");
      }
    );
  });

  //navBar
  $(window).resize(function () {
    if ($(this).width() > 1175) {
      $(".navBar ul").css("display", "flex");
      navBar = true;
    } else {
      /* navBar = false; */
      $(".navBar ul").css("display", "block");
    }
  });
  //navBar button
  $("#menuShow").click(() => {
    navBar = !navBar;
    if (navBar) {
      $("#menuShow").css("left", "1rem");
      $(".navBar").css("left", "-20rem");
    } else {
      $("#menuShow").css("left", "15rem");
      $(".navBar").css("left", "0rem");
    }
  });

  $(".navBar ul")
    .children()
    .each(function (index, element) {
      $(element).click(function (e) {
        if ($(window).innerWidth() <= 1175) {
          navBar = true;
          $("#menuShow").css("left", "1rem");
          $(".navBar").css("left", "-20rem");
        }
      });
    });
});
