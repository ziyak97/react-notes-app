import React from 'react'

import './note.styles.css'

const Note = ({ title, content, id, deleteNote }) => (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className='note__delete' onClick={() => deleteNote(id)}>DELETE</div>
        </div>
)

export default Note