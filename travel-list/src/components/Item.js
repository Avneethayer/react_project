export default function Item({ item, onDeleteItems, onToggleItems }) {
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
