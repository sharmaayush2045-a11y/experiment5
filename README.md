# 📝 Live Character Counter

A real-time character counter built with **React + Vite** as part of Experiment 5.  
Users can type in a textarea and instantly see character count, word count, remaining characters, and warnings when approaching or exceeding the limit.

---

## 📁 Folder Structure

```
character-counter/
│
├── public/
├── src/
│   ├── components/
│   │   ├── CharacterCounter.jsx     # Main component
│   │   └── CharacterCounter.css     # Component styles
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/character-counter.git

# 2. Navigate into the project folder
cd character-counter

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 React Concepts Used

| Concept | Usage |
|---|---|
| `useState` | Stores the textarea value in state |
| `onChange` | Handles every keystroke in the textarea |
| Conditional rendering | Shows warning/error messages based on character count |
| Derived state | Computes `charCount`, `wordCount`, `remaining` from state |
| Event handlers | `handleChange`, `handleClear` functions |

---

## ✨ Features

- **Live character counter** — updates on every keystroke
- **Word counter** — counts words in real time
- **Remaining characters** — shows how many characters are left (limit: 200)
- **Progress bar** — fills up as you type (blue → amber → red)
- **Warning message** — appears at 85% of the limit
- **Error message** — appears when the limit is exceeded
- **Clear button** — resets the textarea (disabled when empty)
- **Responsive layout** — works on both desktop and mobile

---

## 🖥️ Usage

1. Click inside the textarea and start typing
2. Watch the **Characters**, **Words**, and **Remaining** stats update live
3. A **yellow warning** appears when you're close to the 200-character limit
4. A **red error** appears if you exceed the limit
5. Click **Clear** to reset everything

---

## 📸 Output Preview

```
┌─────────────────────────────────────┐
│       Live Character Counter        │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ Type something here...      │    │
│  └─────────────────────────────┘    │
│  ████████████░░░░░░░░░░  (progress) │
│                                     │
│  [42 chars]  [8 words]  [158 left]  │
│                                     │
│  ⚠️ Nearing the limit!              │
│                                     │
│           [ Clear ]                 │
└─────────────────────────────────────┘
```

---

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool and dev server
- CSS — custom styling (no external UI library)

---

## 📚 Experiment Details

| Field | Details |
|---|---|
| Experiment | 5 |
| Topic | Live Character Counter (React UI) |
| Deadline | 01 March 2026 |
| Concepts | useState, onChange, Conditional Rendering |

---

## 👤 Author

**Ayush**  

---

