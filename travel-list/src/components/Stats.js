export default function Stats({ items }) {
  if (!items.length) {
    return <div className="stats">Start adding items to the list</div>
  }

  const numItems = items.length
  const itemsPacked = items.filter((item) => item.packed).length
  const packedPercent = Math.round((itemsPacked / numItems) * 100)

  return (
    <div className="stats">
      {packedPercent === 100
        ? "You are fully packed"
        : `💼 You have ${numItems} items on your list, and you already packed"
        ${itemsPacked} item ${packedPercent}%}`}
    </div>
  )
}
