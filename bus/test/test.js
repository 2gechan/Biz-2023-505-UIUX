const lists = document.querySelector("#lists");
const ul = lists.querySelector("ul");
const inputTag = document.querySelector("#textInput");

const createList = () => {
  // keyCode : 13은 enter키
  if (window.event.keyCode === 13 && inputTag.value !== "") {
    const newLi = document.createElement("li");
    newLi.textContent = inputTag.value;
    ul.appendChild(newLi);

    lists.appendChild(ul);
    inputTag.value = "";
  }
};

const btnOn = document.querySelector("#btnOn");

btnOn.addEventListener("click", () => {
  lists.classList.toggle("add-list");
  if (ul.style.display === "none") {
    ul.style.display = "block";
  } else if (ul.style.display !== "none") {
    ul.style.display = "none";
  }
});
