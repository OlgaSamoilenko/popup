const deleteBtn = document.getElementById("delete-btn");

const popup = document.getElementById("popup");

const noBtn = document.getElementById("no-btn");

const yesBtn = document.getElementById("yes-btn");

const success = document.getElementById("success");

const buyBtn = document.getElementById("buy-btn");

const overlay = document.getElementById("overlay");

deleteBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.classList.add("show");
});

noBtn.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.classList.remove("show");
});

yesBtn.addEventListener("click", () => {
   popup.style.display = "none";
  success.style.display = "block";
  overlay.classList.add("show");
});

buyBtn.addEventListener("click", () => {
  success.style.display = "none";
  overlay.classList.remove("show");
});



var links = document.querySelectorAll('.link li');
var content = document.querySelectorAll('.tabs-content .tabs_box');
for(var i=0; i <links.length; i++) {
    (function(i) {
       var link = links[i];
       link.onclick = function() {
           for(var j=0; j <content.length; j++) {
              var opacity = window.getComputedStyle(content[j]).opacity;
              if(opacity == "1") {
                 content[j].style.opacity = "0";
              }
           }
        content[i].style.opacity = "1";
        }
    })(i);
}
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const tasks = ['встать', 'купить', 'продать'];
// for(let i=0; i < 3; i++){
//   console.log(tasks[i]);
// }