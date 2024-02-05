"use strict";

let lists = document.querySelectorAll(".lists");
let boxes = document.querySelectorAll(".boxes");
let footerButtons = document.querySelectorAll(".footer_Box");

// drop and drag feature function
function dragAndDrop(allLists) {
  for (let list of allLists) {
    list.addEventListener("dragstart", function (e) {
      // setting Default Values
      let selectedTask = e.target;
      selectedTask.style.fontFamily = `Geologica, sans-serif`;
      selectedTask.style.paddingLeft = `1rem`;
      selectedTask.style.fontWeight = `100`;
      selectedTask.style.marginTop = "1rem";
      selectedTask.style.textTransform = "capitalize";

      // Implementing Drag features
      boxes.forEach(function (box) {
        box.addEventListener("dragover", function (e) {
          e.preventDefault();
        });
      });

      // Drop Feature Added
      boxes.forEach((box, i) => {
        box.addEventListener("drop", function (e) {
          // If the task is of "Done" Board then mark it complete/cut the task
          if (box.classList.contains("done_container")) {
            selectedTask.style.textDecoration = "line-through";
          } else {
            selectedTask.style.textDecoration = "none";
          }
          box.appendChild(selectedTask);
          selectedTask = null;
        });
      });
    });
  }
}

// Add to Card Button Feature:
footerButtons.forEach((Footer_Button) => {
  Footer_Button.addEventListener("click", function () {
    const boardContainer = Footer_Button.previousElementSibling;
    let taskInside = boardContainer.children.length;
    let task = prompt("Enter your Task");
    let html = `<p class="lists list${++taskInside}" draggable="true">${task}</p>`;
    boardContainer.insertAdjacentHTML("beforeend", html);
    dragAndDrop(boardContainer.children);
  });
});

dragAndDrop(lists);
