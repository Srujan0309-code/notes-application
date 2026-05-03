import React from 'react'

const App = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <div className='p-10 bg-black text-stone-50 h-screen w-full lg:flex ' >
      <form >
        <h1 className='text-2xl font-bold mb-5'>Create a New Note</h1>
        <input type="text" placeholder='Title' className='bg-transparent border-2 outline-none border-stone-50 p-2 w-full mb-5' />
        <textarea placeholder='Content' className='bg-transparent border-2 outline-none border-stone-50 p-2 w-full mb-5' />
        <button onClick={(e) => onSubmit()} className='bg-blue-500 text-white px-4 py-2'>Submit</button>

      </form>
      <div className='p-5 bg-stone-900 h-screen w-full rounded-lg lg:ml-10 mt-10 lg:mt-0'>
        <h1 className='text-2xl font-bold mb-5'>Your Notes</h1>
        <div className='flex flex-row flex-wrap gap-5'>
          <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
        <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
        <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
         <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
         <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
         <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
         <div className='bg-stone-50 text-black p-5 rounded-lg w-80'>
          <h2 className='text-xl font-bold mb-3'>Note Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
        
        </div>
        </div>
        
      </div>
   
    
      
    
  )
}

export default App
