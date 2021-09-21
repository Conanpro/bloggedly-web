import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client'
import BlogComp from '../components/BlogComp'
import { GET_BLOG } from '../gql/query'

const BlogPage = ({ match }) => {

    useEffect(() => {
        document.title = 'View Blog'
    })

    const id = match.params.id

    const { loading, error, data } = useQuery(GET_BLOG, { variables: { id } })

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error! Blog not found</p>
    
    return <BlogComp blog={data.getBlog} />
}
 
export default BlogPage