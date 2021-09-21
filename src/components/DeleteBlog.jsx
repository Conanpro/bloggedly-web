import React from 'react'
import { useMutation } from '@apollo/client'
import { withRouter } from 'react-router-dom'
import { DELETE_BLOG } from '../gql/query'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Delete } from '@material-ui/icons'

const DeleteImg = styled(motion(Delete))`
    width: 1.20em;
`

const DeleteBlog = ({ id, history }) => {

    const [deleteBlog] = useMutation(DELETE_BLOG, {
        variables: {
            id
        },
        onCompleted: () => {
            history.push('/myblogs')
        }
    })

    return (
        <DeleteImg
            onClick={deleteBlog}
        />
    );
}
 
export default withRouter(DeleteBlog)