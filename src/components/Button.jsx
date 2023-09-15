const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="h-full p-2 font-semibold bg-indigo-400 min-w-fit">{label}</button>

  )
}

export default Button