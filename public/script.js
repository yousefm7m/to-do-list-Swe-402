const API_URL = 'http://localhost:3000/notes';

const noteForm = document.getElementById('note-form');
const titleInput = document.getElementById('note-title');
const contentInput = document.getElementById('note-content');
const notesContainer = document.getElementById('notes-container');
const themeToggle = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

document.addEventListener('DOMContentLoaded', fetchNotes);

noteForm.addEventListener('submit', async (e) => {
  e.preventDefault(); 
  
  const title = titleInput.value;
  const content = contentInput.value;
  
  const newNote = {
    title: title,
    content: content
  };
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(newNote) 
    });
    
    if (response.ok) {
      titleInput.value = '';
      contentInput.value = '';
      
      fetchNotes();
    } else {
      console.error('Failed to add note');
      alert('Failed to add note. Please try again.');
    }
  } catch (error) {
    console.error('Error adding note:', error);
  }
});

async function fetchNotes() {
  try {
    const response = await fetch(API_URL);
    const notes = await response.json(); 
    
    notesContainer.innerHTML = '';
    
    notes.forEach(note => {
      const noteElement = document.createElement('div');
      noteElement.classList.add('note-card');
      
      const dateStr = new Date(note.date).toLocaleString();
      
      noteElement.innerHTML = `
        <div class="note-content-container">
          <h3 class="note-title">${note.title}</h3>
          <p class="note-text">${note.content}</p>
          <small class="note-date">${dateStr}</small>
        </div>
        <button class="delete-btn" onclick="deleteNote('${note._id}')">Delete</button>
      `;
      
      notesContainer.appendChild(noteElement);
    });
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
}

async function deleteNote(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      fetchNotes();
    } else {
      console.error('Failed to delete note');
      alert('Failed to delete note. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting note:', error);
  }
}
