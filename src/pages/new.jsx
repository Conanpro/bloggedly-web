import React, { useEffect } from 'react'
import { gql, useMutation } from '@apollo/client'
import BlogForm from '../components/BlogForm'

const NEW_BLOG = gql`
    mutation postBlog($content: String!) {
        postBlog(content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                id
                username
            }
        }
    }
`

const NewBlog = (props) => {

    useEffect(() => {
        document.title = 'New Blog - Bloggedly'
    })

    const [newBlog, { loading, error }] = useMutation(NEW_BLOG, {
        onCompleted: data => {
            props.history.push(`/blog/${data.postBlog.id}`)
        }
    })

    return (
        <React.Fragment>
            {loading && <p>Loading...</p>}
            {error && <p>Error!</p>}
            <BlogForm action={newBlog}/>
        </React.Fragment>
    )
}

export default NewBlog