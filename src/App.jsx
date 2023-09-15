import Input from './components/Input'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen bg-sky-400">
      <div className="text-white bg-slate-950 h-[70vh] w-[70vh] rounded-lg p-4 flex flex-col items-center">
        <span className="text-5xl font-semibold">Get Things Done!</span>
        <div className="mb-5"></div>
        <Input></Input>
        <TodoItem></TodoItem>
      </div>
    </div>
  )
}

export default App
