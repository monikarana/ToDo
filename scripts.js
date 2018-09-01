
var submit = document.querySelector("input[type='submit']");
var input = document.querySelector("input[type='text']");
var noteTable = document.getElementById("notesTable");

(function() {
  var keys = Object.keys(localStorage);
  keys.forEach(function(id) {
    displayAddedNote(id);
  });
})();

function addNote(note) {
  var noteId = "Note" + (localStorage.length+1)
  localStorage.setItem(noteId, note);
  displayAddedNote(noteId);
}
function createButton(btnType, noteId){
  console.log(btnType, noteId);
  var btn = document.createElement('button');
  var node = document.createTextNode(btnType);
  btn.setAttribute("id", btnType+noteId);
  btn.appendChild(node);
  btn.setAttribute("onclick", "action('"+ btnType+ "','" + noteId+"')");
  return btn;
}
function action(btnType, noteId) {
  console.log("triggerd", btnType, noteId);
}

function action(btnType, noteId) {
  if(btnType == "Edit") {
    console.log("edit triggered for", noteId);
  } else {
    localStorage.removeItem(noteId);
    var tableRow = document.getElementById(noteId);
    tableRow.parentNode.removeChild(tableRow);
  }
}

input.addEventListener(13, function(){
  var note = input.value;
  if(note) {
    addNote(note);
  } else {
    alert("No note to add");
  }
});
submit.addEventListener('click', function(){
  var note = input.value;
  if(note) {
    addNote(note);
  } else {
    alert("No note to add");
  }
});
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
    console.log("note added in local storage" + noteValue);
  }
}
