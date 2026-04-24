# 📝 My Notes App

A full-stack web app where you can write notes, save them to a real cloud database, and come back to them later. No account needed, no setup — just open it and start writing.

---

<img width="940" height="628" alt="image" src="https://github.com/user-attachments/assets/8d2920a1-f34d-4581-8a2a-a5012dde87ca" />


---

## What it does

- **Write and save notes** — type a title and some text, hit the button, it's saved
- **Notes stay there** — everything is stored in MongoDB Atlas so they survive closing the browser or restarting the server
- **Delete notes** — one click on the delete button on any card
- **Dark mode** — toggle it any time, and it remembers your choice the next time you open the page
- **Fully responsive** — works on mobile too, the grid adjusts on its own

---

## Screenshots

### Light Mode
<img width="511" height="428" alt="image" src="https://github.com/user-attachments/assets/63ecad4f-55c7-492e-a3b6-cd6520f8e84d" />

---

### Dark Mode


<img width="940" height="628" alt="image" src="https://github.com/user-attachments/assets/8d2920a1-f34d-4581-8a2a-a5012dde87ca" />


---

### Adding a Note
<img width="894" height="339" alt="image" src="https://github.com/user-attachments/assets/15b0a4e3-4277-46fb-97e8-858d26fe21bd" />

---

## How it works

The app is split into three layers that all talk to each other:

1. **Front end** (HTML + CSS + JavaScript) — what you see in the browser
2. **Back end** (Node.js + Express) — the server that handles requests
3. **Database** (MongoDB Atlas) — where the notes actually live in the cloud

When you hit "Add Note", the browser sends the data to the Express server, the server saves it to MongoDB, and the page refreshes the list — all without reloading the page.

---

## File structure

```
├── public/
│   ├── index.html     # The page structure
│   ├── style.css      # All the styling, dark mode, grid layout
│   └── script.js      # Fetching, adding, deleting notes — all the browser logic
├── server.js          # Express server + MongoDB connection + API routes
└── package.json       # Dependencies
```

---

## Running it locally

1. Clone the repo
```bash
git clone https://github.com/yousefm7m/to-do-list-Swe-402.git
cd to-do-list-Swe-402
```

2. Install dependencies
```bash
npm install
```

3. Start the server
```bash
node server.js
```

4. Open your browser and go to `http://localhost:3000`

> You need Node.js installed. The MongoDB connection is already set up pointing to the Atlas cluster — no extra configuration needed.

---

## Built with

- HTML, CSS, JavaScript — front end
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) — back end
- [MongoDB Atlas](https://www.mongodb.com/atlas) — cloud database
- [Mongoose](https://mongoosejs.com/) — for talking to MongoDB cleanly from Node

---

## API routes

| Method | Route | What it does |
|--------|-------|-------------|
| GET | `/notes` | Get all notes, newest first |
| POST | `/notes` | Save a new note |
| DELETE | `/notes/:id` | Delete a note by its ID |

---

## Made by

**Youssuf Alshafai** — Altınbaş University, Software Engineering  
Internet Programming Project — April 2026  
GitHub: [@yousefm7m](https://github.com/yousefm7m)
