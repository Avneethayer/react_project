export default function App() {
  return (
    <div>
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
  return <div className="form">What do you need for your 😍 trip</div>
}

function PackingList() {
  return (
    <div className="list">
      <h2 className="list_heading">List</h2>
    </div>
  )
}

function Stats() {
  return (
    <div className="stats">
      💼 You have X items on your list, and you already packed X (X%)
    </div>
  )
}
