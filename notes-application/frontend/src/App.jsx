import React, { useState } from 'react'

const App = () => {
 
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tasks, setTasks] = useState([])
  const onSubmit = (e) => {
    e.preventDefault()
    const newTask = [...tasks]
    newTask.push({ title, content })
    setTasks(newTask)
    setTitle('')
    setContent('')
  }
  const onDelete = (index) => {
    const newTask = [...tasks]
    newTask.splice(index, 1)
    setTasks(newTask)
    console.log(index, tasks)
  }
  return (
    <div className='p-10 bg-[url(https://img.magnific.com/free-vector/leafy-patterned-note-background-vector_53876-164246.jpg?semt=ais_hybrid&w=740&q=80)] bg-cover text-black h-screen w-full gap-20 lg:flex' >
      <form className='w-96 pl-5'>
        <h1 className='text-2xl font-bold mb-5 '>Create a New Note</h1>
        <input type="text" placeholder='Title' className='bg-transparent border-2 outline-none border-black p-2 w-full mb-5' value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder='Content' className='bg-transparent border-2 outline-none border-black p-2  w-full mb-5' value={content} onChange={(e) => setContent(e.target.value)} />
        <button onClick={(e) => onSubmit(e)} className='bg-blue-500 text-white px-4 py-2'>Submit</button>

      </form>
      <div className='p-5  h-full overflow-y-auto lg:border-l-2 border-black  lg:ml-auto lg:mr-0 mt-10 lg:mt-0 flex-1'>
        <h1 className='text-2xl font-bold mb-5'>Recent Notes</h1>
        <div className='flex flex-row flex-wrap gap-5'>
          {tasks.map((elem, index) => (   
        <div className='bg-cover flex flex-col justify-between relative bg-[url(https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png)] text-black p-5 w-50 h-52 rounded-lg'>
          <div>
            <h2 className='text-xl pl-1 leading-tight font-bold'>{elem.title}</h2>
            <p className='leading-tight font-medium mt-2'>{elem.content}</p>
          </div>
          <button onClick={(elem) => onDelete(index)} className='bg-red-500  font-bold w-full cursor-pointer active:scale-95 text-xs rounded text-white p-2 mt-auto'>Delete</button>
        </div>
         
          ))}
  
  
       
        
        </div>
        </div>
        
      </div>
   
    
      
    
  )
}

export default App
