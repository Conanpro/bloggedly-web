import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import BlogUser from './BlogUser'
import { IS_LOGGED_IN } from '../gql/query'
import { withRouter } from 'react-router'
import { motion } from 'framer-motion'

const StyledBlog = styled(motion.article)`
    max-width: 800px;
    margin: 0 auto;
`
const MetaData = styled.div`
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 2em;
    padding-bottom: 1em;
    @media (min-width: 500px) {
        display: flex;
        align-items: top;
    }
    border-radius: 40px 40px 0px 0px;
    background: rgba( 71, 159, 171, 0.05 );
    box-shadow: 0 8px 320px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.0px );
    -webkit-backdrop-filter: blur( 0.0px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom: 0;
`

const MetaInfo = styled.div`
    padding-right: 1em;
    margin-bottom: 0;
`

const UserActions = styled.div`
    margin-left: auto;
    margin-bottom: 0;
`

const Img = styled.img`
    border-radius: 50%;
`

const BlogClick = styled(motion.div)`
    height: 235px;
    padding: 2em;
    cursor: pointer;
`

const TextDiv = styled.div`
    padding: 0;
    height: 100%;
    width: 100%auto;
    margin-bottom: 2em;
    overflow-y: hidden;
`

const Blog = ({ blog, history, favs }) => {

    const avatar = `https://avatars.dicebear.com/api/bottts/${blog.author.username}.svg?background=%23ffff`

    const { loading, error, data } = useQuery(IS_LOGGED_IN)

    if ( loading) return <p>Loading...</p>

    if (error) return <p>Error!</p>

    return (
        <StyledBlog>
            <MetaData>
                <MetaInfo>
                    <Img 
                        src={avatar} 
                        alt={blog.author.username + '\'s avatar'}
                        height="50px"
                    />
                </MetaInfo>
                <MetaInfo>
                    <em>by</em> { blog.author.username } <br />
                    { blog.createdAt }
                </MetaInfo>
                {data.isLoggedIn ? (
                    <UserActions>
                        <BlogUser favs={favs} blog={blog} />
                    </UserActions>
                ) : (
                    <UserActions>
                        <em>Favorites: </em> { blog.favoriteCount }
                    </UserActions>
                )}
            </MetaData>
            <BlogClick
                onClick={() => {
                    history.push(`/blog/${blog.id}`)
                }}
            >
                <TextDiv>
                    <ReactMarkdown className='blue'>{ blog.content }</ReactMarkdown>
                </TextDiv>
            </BlogClick>
        </StyledBlog>
    );
}
 
export default withRouter(Blog)