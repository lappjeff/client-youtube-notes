import { useEffect, useState } from 'react';
import Note from './note/Note';


function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        
        function handleNotes() {
        const localNotes = localStorage.getItem('yt-notes')
  
        if(!localNotes) return 
  
        setNotes(Object.values(JSON.parse(localNotes)))
  
      }
  
      window.addEventListener('storage', handleNotes)
  
      // handles cleanup
      return () => window.removeEventListener('storage', handleNotes)
    }, [])

    return <>
    {notes.map((notesArray: any[]) => {
        return (
        <>
            <h2>
                {notesArray[0].id}
            </h2>
        <>
            {notesArray.map(note => <Note note={note}/>)}
        </>

        </>
        )
    })}</>
}

export default Notes