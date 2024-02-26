const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 10, packed: true },
  { id: 3, description: "Shoes", quantity: 12, packed: false },
]

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return <h1 className="logo">🌴 Far Away 💼</h1>
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <div>
        <select className="form_elements">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input className="form_elements" type="text" placeholder="Item..." />
        <button className="form_elements">Add</button>
      </div>
    </form>
  )
}

function PackingList() {
  return (
    <div className="list">
      <h2 className="list_heading">List</h2>
      <ul className="list_item">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

function Item({ item }) {
  return (
    <li>
      <div className={!item.packed ? "not_packed" : ""}>
        {item.description}
        {item.quantity}
        <button>❌</button>
      </div>
    </li>
  )
}

function Stats() {
  return (
    <div className="stats">
      💼 You have X items on your list, and you already packed X (X%)
    </div>
  )
}
