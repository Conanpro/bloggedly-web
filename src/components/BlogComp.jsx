import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import BlogUser from './BlogUser'
import { IS_LOGGED_IN } from '../gql/query'

const StyledBlog = styled.article`
    @media (min-width: 700px) {
        min-width: 500px;
        width: 800px auto;
        margin: 3em auto;
        margin-left: 5em;
        margin-right: 5em;
        margin-bottom: 5em;
        height: auto;
        background: rgba( 255, 255, 255, 0.10 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 9.0px );
        -webkit-backdrop-filter: blur( 20.0px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        padding: 3em;
    }
`
const MetaData = styled.div`
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
`

const MetaInfo = styled.div`
    padding-right: 1em;
`

const UserActions = styled.div`
    margin-left: auto;
`

const BlogComp = ({ blog }) => {

    const { loading, error, data } = useQuery(IS_LOGGED_IN)

    if ( loading) return <p>Loading...</p>

    if (error) return <p>Error!</p>

    const avatar = `https://avatars.dicebear.com/api/bottts/${blog.author.username}.svg?background=%23ffff`

    return (
        <StyledBlog>
            <MetaData>
                <MetaInfo>
                    <img 
                        src={avatar} 
                        alt={blog.author.username + '\'s avatar'}
                        height="50px"
                        borderradius="50%"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> { blog.author.username } <br />
                    { blog.createdAt }
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserActions>
                        <BlogUser blog={blog} />
                    </UserActions>
                ) : (
                    <UserActions>
                        <em>Favorites: </em> { blog.favoriteCount }
                    </UserActions>
                )}
            </MetaData>
            <ReactMarkdown className='blue'>{ blog.content }</ReactMarkdown>
        </StyledBlog>
    );
}
 
export default BlogComp