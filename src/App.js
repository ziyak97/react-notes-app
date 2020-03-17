import React, { useState } from 'react'

import Header from './components/header/header.component'
import NoteList from './components/note-list/note-list.component'
import Footer from './components/footer/footer.component'
import AddNote from './components/add-note/add-note.component'



import './App.css'

const App = () => {
  const [notes, setNotes] = useState([])

  const addNote = (title, content) => {
    const note = {
      title,
      content
    }
    setNotes([...notes, note])
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note, index) => {
      return id !== index
    }))
  }

  return (
    <div className="App">
      <Header />

      <AddNote
        addNote={addNote}
      />

      <NoteList notes={notes} deleteNote={deleteNote} />

      <Footer />
    </div>
  )
}

export default App