import { useState } from "react"

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 10, packed: true },
//   { id: 3, description: "Shoes", quantity: 12, packed: false },
// ]

export default function App() {
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    )
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    )
    if (confirmed) setItems([])
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  )
}

function Logo() {
  return <h1 className="logo">🌴 Far Away 💼</h1>
}

function Form({ onAddItems }) {
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

function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input")

  let sortedItems

  if (sortBy === "input") sortedItems = items
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))

  if (sortBy === "packingOrder")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed)

  return (
    <div className="list">
      <h2 className="list_heading">List</h2>
      <ul className="list_item">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packingOrder">Sort by packing order</option>
      </select>
      <button onClick={onClearList}>Clear List</button>
    </div>
  )
}

function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <div className={!item.packed ? "not_packed" : ""}>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        {item.description}
        {item.quantity}
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </div>
    </li>
  )
}

function Stats({ items }) {
  if (!items.length) {
    return <div className="stats">Start adding items to the list</div>
  }

  const numItems = items.length
  const itemsPacked = items.filter((item) => item.packed).length
  const packedPercent = Math.round((itemsPacked / numItems) * 100)

  return (
    <div className="stats">
      {packedPercent == 100
        ? "You are fully packed"
        : `💼 You have ${numItems} items on your list, and you already packed"
      ${itemsPacked} item ${packedPercent}%}`}
    </div>
  )
}
