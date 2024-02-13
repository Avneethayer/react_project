const Button = ({value, handleClick}) => {
  return (
    <button className="btn" onClick={handleClick} >{value}</button>
  )
}

export default Button