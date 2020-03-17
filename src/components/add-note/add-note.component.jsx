import React, { useState } from 'react'

import './add-note.styles.css'

const AddNote = ({ addNote }) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [popup, setPopup] = useState(false)

    const togglePopup = () => {
        setPopup(!popup)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addNote(title, description)
        setTitle('')
        setDescription('')
        togglePopup()
    }

    return (
        <React.Fragment>
            <form className={`add-note ${popup && 'add-note__clicked'}`} id='popup' onSubmit={handleSubmit}>
                <div className='content'>
                    <div className='input__close' onClick={togglePopup}>&times;</div>
                    <h1>Add a note...</h1>
                    <input
                        type="text"
                        className='input'
                        name='title'
                        placeholder='title'
                        autoComplete='off'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />

                    <textarea
                        className='input input--text-area'
                        placeholder='note' name="description"
                        id='note'
                        cols="30"
                        rows="10"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <button className='add-note__btn' type='submit'>Add Note</button>
                </div>
            </form>

            <button className='add-note__btn add-note__btn--create' onClick={togglePopup}>Create Note</button>
        </React.Fragment>
    )
}

export default AddNote