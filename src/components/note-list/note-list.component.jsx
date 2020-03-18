import React from 'react'
import { ReactSortable } from "react-sortablejs"

import Note from '../note/note.component'

import './note-list.styles.css'

const NoteList = ({ notes, setNotes, deleteNote }) => (
  <ReactSortable
    className='note-list'
    animation='150'
    list={notes} setList={setNotes}
    handle='.note__image--note'
  >
    {notes.map(({ title, content }, id) => (
      <Note key={id} id={id} title={title} content={content} deleteNote={deleteNote} />
    ))}
  </ReactSortable>
)

export default NoteList