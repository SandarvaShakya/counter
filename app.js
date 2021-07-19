const buttons = document.querySelectorAll(".btn");
const count = document.getElementById("count");

let num = 0;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("decrease")) {
      num--;
    } else if (e.target.classList.contains("increase")) {
      num++;
    } else {
      num = 0;
    }

    if (num < 0) {
      count.style.color = "red";
    }
    if (num > 0) {
      count.style.color = "green";
    }
    if (num === 0) {
      count.style.color = "black";
    }

    count.textContent = num;
  });
});
