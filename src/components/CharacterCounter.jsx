import { useState } from "react"
import "./CharacterCounter.css"

const MAX_LIMIT = 200

function CharacterCounter() {

  // STATE — stores whatever the user types
  const [text, setText] = useState("")

  // EVENT HANDLER — runs every time user types
  const handleChange = (e) => {
    setText(e.target.value)
  }

  // DERIVED VALUES
  const charCount = text.length
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
  const remaining = MAX_LIMIT - charCount
  const percentage = Math.min((charCount / MAX_LIMIT) * 100, 100)

  // CLEAR button handler
  const handleClear = () => {
    setText("")
  }

  return (
    <div className="container">
      <h1>Live Character Counter</h1>

      {/* TEXTAREA */}
      <label htmlFor="myTextarea">Start typing below:</label>
      <textarea
        id="myTextarea"
        value={text}
        onChange={handleChange}
        placeholder="Type something here..."
        className={charCount > MAX_LIMIT ? "textarea exceeded" : "textarea"}
      />

      {/* PROGRESS BAR */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {/* STATS */}
      <div className="stats">
        <div className="stat-box">
          <span className="stat-value">{charCount}</span>
          <span className="stat-label">Characters</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{wordCount}</span>
          <span className="stat-label">Words</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">{remaining < 0 ? 0 : remaining}</span>
          <span className="stat-label">Remaining</span>
        </div>
      </div>

      {/* CONDITIONAL WARNING MESSAGES */}
      {charCount > MAX_LIMIT && (
        <p className="message error">
          Character limit exceeded! ({charCount - MAX_LIMIT} over the limit)
        </p>
      )}

      {charCount <= MAX_LIMIT && percentage >= 85 && (
        <p className="message warning">
          Nearing the limit — only {remaining} characters left!
        </p>
      )}

      {/* CLEAR BUTTON */}
      <button
        onClick={handleClear}
        disabled={charCount === 0}
        className="clear-btn"
      >
        Clear
      </button>

    </div>
  )
}

export default CharacterCounter