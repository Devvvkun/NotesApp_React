import React, {useState} from 'react'

const NotesApp = () => {
    const [Notes, setNotes] = useState({
        "Title" : "",
        "Desc" : ""
    })
    const [sbtNotes , setsbtNotes] = useState([])
    const handleNote = (e) => {
        const {name , value} = e.target
        setNotes({...Notes , [name]:value})
    }
    
     const handleSubmit = (e) =>{
            e.preventDefault()
            let copyNote = [...sbtNotes]
            copyNote.push(Notes)
            setsbtNotes(copyNote)
            setNotes({
                "Title" : "",
                "Desc" : ""
            })
        }
        const handleDelete = (idx) =>{
            let deleteNote = [...sbtNotes]
            deleteNote.splice(idx,1)
            setsbtNotes(deleteNote)
        } 
  return (
  <form onSubmit={handleSubmit}>  <div className='flex flex-col w-full sm:flex-row'>
        
        <div className="addNotes flex w-full flex-col overflow-hidden sm:w-1/2">
        <h3 className='m-2'>Add Notes:</h3>
        
            <input type="text" name="Title" placeholder='Enter your Tasks here' onChange={handleNote} value = {Notes.Title} className='border-2 outline-none px-4 py-2 m-3'/>
            <input className=' border-2 outline-none px-4 pt-0 py-20  m-3' type="text" name="Desc" onChange={handleNote} value={Notes.Desc} placeholder='Enter your task description'/>
           <button
  type="submit"
  className="rounded bg-white font-medium text-black px-4 py-2 m-3"
>
  Add Task
</button>
       
        </div>
       

      
        <div className="shownotes  h-screen w-1/2 pb-50 flex flex-wrap my-0.5 overflow-hidden sm:border-l-2 sm:border-white">
         {sbtNotes.map((note,idx) => {
     return (
  <div
    key={idx}
    className="
      note h-70 w-[50%] mx-2 my-0
      lg:w-[27%]
      bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaX_oeUqgWZqqmIT2HNNT9QZEGyn67Ek53nKNLVvKJw&s=10')]
      bg-no-repeat bg-contain
      text-black px-4
      wrap-break-words
      flex flex-col
    "
  >
    <h1 className="font-bold text-2xl pt-12 pl-1 pb-3">
      {note.Title}
    </h1>

    <p className="leading-tight px-2 break-words whitespace-normal overflow-hidden">
      {note.Desc}
    </p>

    <input
      type="button"
      className="bg-red-500 py-1 mt-auto mx-auto w-3/4"
      value="Delete"
      onClick={()=>{
        handleDelete(idx)
      }}
    />
  </div>
)})} 
        </div>
    </div> </form>
  )
}

export default NotesApp