
function addNote(note) {
  var noteId = "Note" + (localStorage.length+1)
  localStorage.setItem(noteId, note);
  showNotes(noteId);
}

var submit = document.querySelector("input[type='submit']");
var input = document.querySelector("input[type='text']");
submit.addEventListener('click', function(){
  var note = input.value;
  if(note) {
    addNote(note);

  } else {
    alert("No note to add");
  }
});

function showNotes(noteId) {
  if(localStorage.length>0) {
    console.log(localStorage[noteId])
  }
}
