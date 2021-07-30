import React from 'react'
import { useEffect } from 'react'

const MyBlogs = () => {

    useEffect(() => {
        document.title = 'My Blogs - Bloggedly'
    })

    return (
        <div>
            <p>This are my blogs</p>            
        </div>
    )
}

export default MyBlogs