import React, { useEffect } from 'react'
import UserForm from '../components/UserForm'
import { gql } from '@apollo/client'

const SIGNIN_USER = gql`
    mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password)
    }
`

const SignIn = () => {

    useEffect(() => {
        document.title = 'Sign In - Bloggedly'
    })

    const props = {
        action: SIGNIN_USER,
        formType: 'signIn'
    }

    return (
        <React.Fragment>
            <UserForm object={props}>
            </UserForm>
        </React.Fragment>
    )
}

export default SignIn