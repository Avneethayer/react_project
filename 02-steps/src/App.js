import "./App.css"

function App() {
  const step = 3
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="content">Step 1: Learn React</div>
      <div className="buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default App
