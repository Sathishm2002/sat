// -------------------------selecting variables----------------------------
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// -------------------------function Add -----------------------------------

function addtask() {
  if (inputBox.value === "") {
    alert("You Must Write Your Task..!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}

//-------------------------------adding eventlistener----------------------------

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
