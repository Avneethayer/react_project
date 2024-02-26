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
  return <h1>🌴Far Away💼</h1>
}

function Form() {
  return <div>What do you need for your 😍 trip</div>
}

function PackingList() {
  return <div>List</div>
}

function Stats() {
  return (
    <div>💼 You have X items on your list, and you already packed X (X%)</div>
  )
}
