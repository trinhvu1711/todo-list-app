import Button from './Button'

const Input = () => {
  return (
    <div className="w-full min-h-[40px] border border-indigo-400  bg-transparent flex items-center mb-8">
      <input type="text" className="w-full min-h-[40px] px-3 bg-transparent outline-none" />
      <Button></Button>
    </div>
  )
}

export default Input