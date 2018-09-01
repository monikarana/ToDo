
var submit = document.querySelector("input[type='submit']");
var input = document.querySelector("input[type='text']");
var noteTable = document.getElementById("notesTable");

(function() {
  var keys = Object.keys(localStorage);
  keys.forEach(function(id) {
    displayAddedNote(id);
  });
})();

function displayAddedNote(noteId) {
  if(localStorage.length>0) {
    var noteValue = localStorage[noteId];
    var row = noteTable.insertRow(0);
    row.setAttribute("id", noteId);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2)
    cell1.innerHTML = noteValue;
    cell2.appendChild(createButton("Edit", noteId));
    cell3.appendChild(createButton("Delete", noteId))
  }
}
function createButton(btnType, noteId){
  var btn = document.createElement('button');
  var node = document.createTextNode(btnType);
  btn.setAttribute("id", btnType+noteId);
  btn.appendChild(node);
  btn.setAttribute("onclick", "action('"+ btnType+ "','" + noteId+"')");
  return btn;
}
function action(btnType, noteId) {
  if(btnType == "Edit") {
    // console.log("edit triggered for", noteId);
    updateNote(noteId);
  } else {
    localStorage.removeItem(noteId);
    var tableRow = document.getElementById(noteId);
    tableRow.parentNode.removeChild(tableRow);
  }
}
function updateNote(noteId) {
  input.value = localStorage.getItem(noteId);
  if(document.getElementById('submit') !== null){
      var submitBtn = document.getElementById('submit');
      submitBtn.parentNode.removeChild(submitBtn);
      createSaveBtn(noteId);
  }
}
function createSaveBtn(noteId) {
  var containerDiv = document.getElementById('inputDiv');
  var saveBtn = document.createElement('input');
  saveBtn.setAttribute("type","submit");
  saveBtn.setAttribute("id", "save");
  saveBtn.setAttribute("value", "Save");
  saveBtn.setAttribute("onclick", "editNote('"+ noteId + "')");
  containerDiv.appendChild(saveBtn);
}
function editNote(noteId) {
  localStorage.setItem(noteId, input.value);
  location.reload();
}
function addNote() {
  var note = input.value;
  if(note) {
    var noteId = "Note" + (localStorage.length+1)
    localStorage.setItem(noteId, note);
    displayAddedNote(noteId);
  } else {
    alert("No note to add");
  }

}
