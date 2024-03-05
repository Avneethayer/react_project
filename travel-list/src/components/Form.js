import { useState } from "react"

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return
    const newItem = { description, quantity, packed: false, id: Date.now() }

    onAddItems(newItem)

    setDescription("")
    setQuantity(1)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <div>
        <select
          className="form_elements"
          value={quantity}
          onChange={(e) => {
            Number(setQuantity(e.target.value))
          }}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="form_elements"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="form_elements">Add</button>
      </div>
    </form>
  )
}
