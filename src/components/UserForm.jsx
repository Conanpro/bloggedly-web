import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { isLoggedInVar } from '../cache'
import { useMutation } from '@apollo/client'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
    display: block;
    margin-top: 5em;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
    height: 500;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: black;
    padding: 2em;
    padding-top: 1.25em;
    background: rgba( 154, 147, 147, 0.00 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 0.0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    font-family: 'Poppins', sans-serif;
`

const Heading = styled.p`
    font-size: 2em;
    margin-bottom: 0.5em;
`

const Box = styled.div`
    margin: 0.2em 0;
    label {
        color: black;
    }
    div {
        position: relative;
        width: 100%;
        height: 40px;
        margin: 0.5em 0;
        input {
            position: absolute;
            width: 100%;
            height: 100%;
            background: #fffcfc;
            color: black;
            border: none;
            outline: none;
            padding-left: 0.8em;
            border-radius: 10px;
            transition: all .4s;
            :focus {
                background-color: #edf3f5;
            }
        }
        input:focus::placeholder {
            color: black;
        }
    }
    div::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 102%;
        height: 105%;
        border-radius: 10px;
        background: linear-gradient(#ff416c, #ff4b2b);
    }
`

const Button = styled.button`
    width: 102%;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin: 0.5em 0;
    transform: translate(-1%);
    cursor: pointer;
    color: white;
    background: linear-gradient(90deg, #ff416c, #ff4b2b);
    transition: all .4s;
    :hover {
        transform: translate(-1%, 5%);
        box-shadow: 0 0 10px #ff416d65;
    }
`

const Par = styled.p`
    font-size: 0.8em;
    margin-top: 0.5em;
    text-align: center;
    color: black;
`

const Form = styled.form`
    width: 100%;
    height: 60%;
`

const UserForm = ({ history, object }) => {
    
    const [
        action, 
        { loading, error }
    ] = useMutation(object.action, {
        onCompleted: data => {
            localStorage.setItem('token', data.signUp || data.signIn)
            isLoggedInVar(true)
            history.push('/')
        }
    })   

    const [values, setValues] = useState({})

    const onChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    if (error) {
        return object.formType === 'signIn' ? <p>User doesnt exist!</p> : <p>Error creating account!</p>
    }
    
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <Container 
            initial={{
                y: -800
            }}
            animate={{
                y: 0
            }}
        >

            {object.formType === 'signUp' ? <Heading>Sign Up</Heading> : <Heading>Sign In</Heading>}

            <Form
                onSubmit={event => {
                    event.preventDefault()
                    action({
                        variables: values
                    })
                }}
            >
                {object.formType === 'signUp' && (
                    <Box>
                        <label htmlFor="username">Username:</label>
                        <div>
                            <input
                                required
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                onChange={onChange}
                            />
                        </div>
                    </Box>
                )}
                <Box>
                    <label htmlFor="email">Email:</label>
                    <div>
                        <input
                            required
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                        />
                    </div>
                </Box>
                <Box>
                    <label htmlFor="password">Password:</label>
                    <div>
                        <input
                            required
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>
                </Box>
                <Button type="submit">Sumbit</Button>
                {object.formType === 'signUp' ? 
                <Par>Allready have an account? <Link to='/signin'>Log In</Link></Par> :
                <Par>Dont have an account? <Link to='/signup'>Sign Up</Link></Par>}
                
            </Form>
        </Container>
    );
}
 
export default withRouter(UserForm)