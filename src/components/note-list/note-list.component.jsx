import React from 'react'

import Note from '../note/note.component'

import './note-list.styles.css'

const NoteList = ({ notes, deleteNote }) => (
    <div className='note-list'>
       {notes.map(({ title, content }, id) => (
        <Note key={id} id={id} title={title} content={content} deleteNote={deleteNote} />
      ))}
    </div>
)

export default NoteList