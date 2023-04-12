const navigationButtons = document.getElementsByClassName("navButton");

const getContentId = (text) => {
  text = text.toLowerCase();
  return text.split(" ").join("-") + "-content";
};

const navigationButtonBehaviour = (button) => {
  const selectedElement = document.querySelector("li.selected");
  selectedElement.classList.toggle("selected");

  button.parentElement.classList.toggle("selected");

  const previousContentId = getContentId(selectedElement.children[0].innerHTML);
  const selectedContentId = getContentId(button.innerHTML);

  document.getElementById(previousContentId).classList.toggle("selected");
  document.getElementById(selectedContentId).classList.toggle("selected");
};

for (let button of navigationButtons) {
  button.addEventListener("click", (event) =>
    navigationButtonBehaviour(button)
  );
}
