var nameInput = document.getElementById("name");
var nameLabel = document.getElementById("nameLabel");
var nameEdit = document.getElementById("nameEdit");
var nameSave = document.getElementById("nameSave");

nameInput.style.display = "none";
nameSave.style.display = "none";
nameEdit.addEventListener("click", function() {
  nameLabel.style.display = "none";
  nameInput.style.display = "";
  nameSave.style.display = "";
  nameEdit.style.display = "none";
});

nameSave.addEventListener("click", function() {
  nameLabel.textContent = nameInput.value;
  nameLabel.style.display = "";
//   nameInput.style.display = "none";
//   nameSave.style.display = "none";
  hideElement(nameInput);
  hideElement(nameSave);
  nameEdit.style.display = "";
});

function hideElement(elem) {
    elem.style.display = 'none';
}