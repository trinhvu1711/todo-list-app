const Input = ({ inputValue, setInputValue }) => {
  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <input type="text" className="w-full min-h-[40px] px-3 bg-transparent outline-none" onChange={handleInputValue} value={inputValue} placeholder='Enter note' />
  )
}

export default Input