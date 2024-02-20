import "./App.css"
import { useState } from "react"

const messages = ["Learn HTML, CSS, JavaScript", "Learn React", "Learn NodeJS"]

function App() {
  const [step, setStep] = useState(1)
  function handlePrevious() {
    if (step > 1) setStep(step - 1)
  }

  function handleNext() {
    if (step < 3) setStep(step + 1)
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <div className="content">
        Step {step}: {messages[step - 1]}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default App
