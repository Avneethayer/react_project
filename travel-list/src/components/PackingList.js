import { useState } from "react"
import Item from "./Item"
export default function PackingList({
  items,
  onDeleteItems,
  onToggleItems,
  onClearList,
}) {
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
