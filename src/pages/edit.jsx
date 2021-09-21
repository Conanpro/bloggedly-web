import React from 'react';
import { useQuery, useMutation } from '@apollo/client'
import BlogForm from '../components/BlogForm'
import { GET_BLOG, GET_ME, EDIT_BLOG } from '../gql/query'

const EditBlog = ({ match, history }) => {

    const id = match.params.id

    const { data: userdata } = useQuery(GET_ME)

    const { loading, error, data } = useQuery(GET_BLOG, { variables: { id } })

    const [ editBlog ] =  useMutation(EDIT_BLOG, {
        variables: {
            id
        },
        onCompleted: () => {
            history.push(`/blog/${id}`)
        }
    })

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error! Blog not found</p>

    if (userdata.me.id !== data.getBlog.author.id) {
        return <p>You dont have access to edit this blog</p>
    }

    return <BlogForm content={data.getBlog.content} action={editBlog} />
}

export default EditBlog