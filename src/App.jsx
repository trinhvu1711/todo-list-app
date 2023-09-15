import { useState } from 'react'
import Input from './components/Input'
import TodoItem from './components/TodoItem'
import Button from './components/Button'
import { v4 as uuidv4 } from 'uuid'
function App() {
  const [inputValue, setInputValue] = useState('')
  const [noteItems, setNoteItems] = useState([])
  const [updateValue, setUpdateValue] = useState('')
  const [enableUpdate, setEnableUpdate] = useState(false)
  const [idUpdate, setIdUpdate] = useState('')
  const handleSubmit = () => {
    setNoteItems([
      ...noteItems,
      { id: uuidv4(), task: inputValue, isComplete: false, isDelete: false }
    ])
    setInputValue('')
  }

  const handleComplete = (id) => {
    setNoteItems((prevNoteItems) => {
      return prevNoteItems.map((item) => {
        if (item.id === id) {
          // Create a new object with the isComplete property toggled
          return { ...item, isComplete: !item.isComplete }
        }
        return item
      })
    })
  }

  const handleRemove = (id) => {
    setNoteItems((prevNoteItems) => {
      return prevNoteItems.map((item) => {
        if (item.id === id) {
          // Create a new object with the isComplete property toggled
          return { ...item, isDelete: true }
        }
        return item
      })
    })
  }

  const handleEdit = (id) => {
    setNoteItems((prevNoteItems) => {
      return prevNoteItems.map((item) => {
        if (item.id === id) {
          // Create a new object with the isComplete property toggled
          return { ...item, task: updateValue }
        }
        return item
      })
    })
    setEnableUpdate(!enableUpdate)
    setUpdateValue('')
  }

  const startPopup = (id) => {
    setEnableUpdate(!enableUpdate)
    setIdUpdate(id)
  }

  return (
    <div className="flex flex-row items-center justify-center w-screen h-screen bg-sky-400">
      <div className="text-white bg-slate-950 h-[70vh] w-[70vh] rounded-lg p-4 flex flex-col items-center">
        <span className="text-5xl font-semibold">Todo List</span>
        <div className="mb-5"></div>
        <div className="w-full min-h-[40px] border border-indigo-400  bg-transparent flex items-center mb-8">
          <Input inputValue={inputValue} setInputValue={setInputValue}></Input>
          <Button onClick={handleSubmit} label='Add task'></Button>
        </div>

        {noteItems.length > 0 && noteItems.map(value => {
          if (!value.isDelete) {
            return <TodoItem TodoItem key={value.id} noteItem={value} handleComplete={() => handleComplete(value.id)} handleRemove={() => handleRemove(value.id)} startPopup={() => startPopup(value.id)} setIdUpdate={() => setIdUpdate()}></TodoItem>
          }
        })}
      </div>
      {enableUpdate && <div className='absolute p-5 m-auto bg-white rounded-lg'>
        <div className="w-full min-h-[40px] border border-indigo-400  bg-transparent flex items-center">
          <Input inputValue={updateValue} setInputValue={setUpdateValue}></Input>
          <Button label='Update' onClick={() => handleEdit(idUpdate)}></Button>
        </div>
      </div>}
    </div >
  )
}

export default App
