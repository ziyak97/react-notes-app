import React from 'react'
import { ReactSortable } from "react-sortablejs"

import Note from '../note/note.component'

import './note-list.styles.css'

const NoteList = ({ notes, setNotes, deleteNote }) => (
  <ReactSortable
    className='note-list'
    animation='150'
    list={notes} setList={setNotes}
  >
    {/* <div className='note-list'> */}
    {notes.map(({ title, content }, id) => (
      <Note key={id} id={id} title={title} content={content} deleteNote={deleteNote} />
    ))}
    {/* </div> */}
  </ReactSortable>
)

export default NoteList