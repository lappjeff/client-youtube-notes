import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    
    function handleNotes() {
      const localNotes = localStorage.getItem('yt-notes')

      if(!localNotes) return 

      setNotes(Object.values(JSON.parse(localNotes)))

    }

    window.addEventListener('storage', handleNotes)

    // handles cleanup
    return window.removeEventListener('storage', handleNotes)
  }, [])

  return (
    <div className="App">
    </div>
  );
}


export default App;


