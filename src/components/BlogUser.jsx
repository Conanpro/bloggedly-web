import React from 'react'
import { useQuery } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { GET_ME } from '../gql/query'
import DeleteBlog from './DeleteBlog'
import FavoriteBlog from './FavoriteBlog'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { Edit } from '@material-ui/icons'

const EditImg = styled(motion(Edit))`
    width: 1.20em;
    margin: 0;
    padding: 0;
`

const buttonVariants = {
    hover: {
        scale: 1.2,
    }
}

const GlassContainer = styled(motion.div)`
    width: 2em;
    height: 2em;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Container = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    @media(min-width: 500px) {
        width: 150px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
    }
`

const BlogUser = ({ blog, history, favs }) => {

    const { data, loading, error } = useQuery(GET_ME)

    if (loading) return <p>Loading...</p>

    if (error) {
        console.log(error)
        return <p>Error!</p>
    }

    return (
        <Container>
            <FavoriteBlog
                favs={favs}
                me={data.me}
                blogId={blog.id}
                favoriteCount={blog.favoriteCount}
            />
            {data.me.id === blog.author.id && (
                <React.Fragment>
                    <GlassContainer
                        transition={{
                            duration: 0.05,
                            delay: 0
                        }}
                        variants={buttonVariants}
                        whileHover='hover'
                        onClick={() => {
                            history.push(`/edit/${blog.id}`)
                        }}
                    >
                        <EditImg/>
                    </GlassContainer>
                    <GlassContainer            
                        transition={{
                            duration: 0.05,
                            delay: 0
                        }}
                        variants={buttonVariants}
                        whileHover='hover'
                    >
                        <DeleteBlog id={blog.id} />
                    </GlassContainer>
                </React.Fragment>
            )}
        </Container>
    )
}
 
export default withRouter(BlogUser)