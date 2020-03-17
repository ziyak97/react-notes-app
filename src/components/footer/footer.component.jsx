import React from 'react'

import './footer.styles.css'

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <footer className='footer'>
            <p>&copy; by Ziyak Jehangir {date}</p>
        </footer>
    )
}

export default Footer