import React, { useEffect } from 'react'
import { useQuery, gql} from '@apollo/client'
import ReactMarkdown from 'react-markdown'

const GET_BLOGS = gql`
    query blogFeed($cursor: String) {
        blogFeed(cursor: $cursor) {
            cursor
            hasNextPage
            blogs {
                id
                createdAt
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                }
            }
        }
    }
`

const Home = () => {

    useEffect(() => {
        document.title = 'Bloggedly'
    })

    const { data, loading, error } = useQuery(GET_BLOGS);
    
    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error!</p>;

    return (
        <div>
            {data.blogFeed.blogs.map((blog) => (
                <article key={blog.id}>
                    <img
                    src={blog.author.avatar}
                    alt={`${blog.author.username}\`s avatar`}
                    height="50px"
                    />{' '}
                    {blog.author.username} {blog.createdAt} {blog.favoriteCount}{' '}
                    <ReactMarkdown>{blog.content}</ReactMarkdown>
                </article>
            ))}
        </div>
    )
}

export default Home