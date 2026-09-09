import React, {useState} from 'react'

const NotesApp = () => {
    const [Notes, setNotes] = useState({
        "Title" : "",
        "Desc" : ""
    })
    const [sbtNotes , setsbtNotes] = useState([{
        "Title"  : "",
        "Desc"  : ""
    }])
    const handleNote = (e) => {
        const {name , value} = e.target
        setNotes({...Notes , [name]:value})
    }
     const handleSubmit = (e) =>{
            e.preventDefault()
            let copyNote = [...Notes]
            copyNote.push({Title,Desc})
            setsbtNotes(copyNote)
            setNotes("")
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
        <div className="shownotes  h-screen w-1/2 flex flex-wrap my-0.5 overflow-hidden sm:border-l-2 sm:border-white">
            <div className="note h-60 w-[45%] mx-2 my-2 lg:w-[27%] bg-white text-black p-4  wrap-break-word"><h1 className='font-medium'>{sbtNotes.Title}</h1> <br /> <p className='pt-2 '>{sbtNotes.Desc}</p></div>
           
        </div>
    </div> </form>
  )
}

export default NotesApp