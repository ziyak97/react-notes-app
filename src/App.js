import React, { useState } from 'react'

import { confirmAlert } from 'react-confirm-alert'

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
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='confirm'>
            <div className='confirm__container'>
              <h1>Are you sure?</h1>
              <p>You want to delete this note?</p>
              <button className='confirm__button confirm__button--no' onClick={onClose}>No</button>
              <button
                className='confirm__button confirm__button--delete'
                onClick={() => {
                  setNotes(notes.filter((note, index) => {
                    return id !== index
                  }))
                }}
              >
                Yes, Delete it!
            </button>
            </div>
          </div>
        )
      }
    })
  }

  return (
    <div className="App">
      <Header />

      <AddNote
        addNote={addNote}
      />

      <NoteList notes={notes} setNotes={setNotes} deleteNote={deleteNote} />

      <Footer />
    </div>
  )
}

export default App