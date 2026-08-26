import React, {useState} from 'react'

const NotesApp = () => {
    const [Title, setTitle] = useState("")
    
     const handleSubmit = (e) =>{
            e.preventDefault()
            setTitle(e.target.value)
        }
  return (
  <form onSubmit={handleSubmit}>  <div className='flex flex-row'>
        
        <div className="addNotes flex w-1/2 flex-col ">
        <h3 className='m-2'>Add Notes:</h3>
        
            <input type="text" name="title" placeholder='Enter your Tasks here' onChange={handleSubmit} className='border-2 outline-none px-4 py-2 m-3'/>
            <input className=' border-2 outline-none px-4 pt-0 py-20  m-3' type="text" name="desc" placeholder='Enter your task description'/>
            <input type="Submit" value="Add Task" className=' rounded bg-white font-medium text-black px-4 py-2 m-3'/>
       
        </div>
        <div className="shownotes border-l-2 h-screen w-1/2 flex flex-wrap">
            <div className="note h-40 w-1/4 mx-2 my-2 bg-white text-black">{Title}</div>
            <div className="note h-40 w-1/4 mx-2 my-2 bg-white text-black">This is a note</div>
            <div className="note h-40 w-1/4 mx-2 my-2 bg-white text-black">This is a note</div>
            <div className="note h-40 w-1/4 mx-2 my-2 bg-white text-black">This is a note</div>
            <div className="note h-40 w-1/4 mx-2 my-2 bg-white text-black">This is a note</div>
        </div>
    </div> </form>
  )
}

export default NotesApp