import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { TOGGLE_FAVORITE } from '../gql/query'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
`

const UnFavorite = styled(motion(Favorite))`
    cursor: pointer;
    width: 1em;
`

const FavoriteLogo = styled(motion(FavoriteBorder))`
    cursor: pointer;
    width: 1em;
`

const P = styled.p`
    margin-top: 0;
    padding-top: 0;
    margin-bottom: 0;
`

const buttonVariants = {
    hover: {
        scale: 1.1,
    }
}

const FavoriteBlog = props => {

    const [count, setCount] = useState(props.favoriteCount)

    const [favorited, setFavorited] = useState(props.me.favorites.blogs.filter(blog => blog.id === props.blogId).length > 0)

    const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
        variables: {
            id: props.blogId
        }
    })

    return (
        <Cont>
            {favorited ? (
                <UnFavorite
                    transition={{
                        duration: 0.05,
                        delay: 0
                    }}
                    color='secondary'
                    variants={buttonVariants}
                    whileHover='hover'
                    onClick={() => {
                        toggleFavorite()
                        setFavorited(false)
                        setCount(count - 1)
                    }}
                />
            ) : (
                <FavoriteLogo
                    transition={{
                        duration: 0.05,
                        delay: 0
                    }}
                    variants={buttonVariants}
                    whileHover='hover'
                    onClick={() => {
                        toggleFavorite()
                        setFavorited(true)
                        setCount(count + 1)
                    }}
                />
            )}
            <P>{count}</P>
        </Cont>
    );
}
 
export default FavoriteBlog