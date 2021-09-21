import React, { useEffect } from 'react'
import UserForm from '../components/UserForm'
import { gql } from '@apollo/client'

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`

const SignUp = () => {

    useEffect(() => {
        document.title = 'Sign Up - Bloggedly'
    })

    const props = {
        action: SIGNUP_USER,
        formType: 'signUp'
    }

    return (
        <React.Fragment>
            <UserForm object={props}>
            </UserForm>
        </React.Fragment>
    )
}

export default SignUp