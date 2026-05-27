let notes = [];

function loadNotes() {
  let container = document.getElementById("notes-container");
  container.innerHTML = "";

  if (notes.length === 0) {
    container.innerHTML = "<p style='color:#aaa; text-align:center; margin-top:20px;'>No notes yet! Add one above.</p>";
    return;
  }

  notes.forEach(function(note, index) {
    let card = document.createElement("div");
    card.className = "note-card";
    card.innerHTML = `
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
      <h3>${note.title}</h3>
      <p>${note.text}</p>
      <div class="date">${note.date}</div>
    `;
    container.appendChild(card);
  });
}

function addNote() {
  let title = document.getElementById("noteTitle").value;
  let text = document.getElementById("noteText").value;

  if (title === "" || text === "") {
    alert("Title aur note dono likho!");
    return;
  }

  let today = new Date().toLocaleDateString();
  notes.push({ title: title, text: text, date: today });

  document.getElementById("noteTitle").value = "";
  document.getElementById("noteText").value = "";

  loadNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  loadNotes();
}

loadNotes();