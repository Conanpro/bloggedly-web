import React from 'react'
import { useEffect } from 'react'

const Favorites = () => {

    useEffect(() => {
        document.title = 'Favorites - Bloggedly'
    })

    return (
        <div>
            <p>This are my favorites</p>            
        </div>
    )
}

export default Favorites