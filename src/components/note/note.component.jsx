import React from 'react'

import MoveImage from '../../images/open_with-24px.svg'

import './note.styles.css'

const Note = ({ title, content, id, deleteNote }) => (
        <div className='note'>
            <img className='note__image--note' src={MoveImage} alt="move-img"/>
            <h1>{title}</h1>
            <p>{content}</p>
            <div className='note__delete' onClick={() => deleteNote(id)}>DELETE</div>
        </div>
)

export default Note