import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
` 

const Form = styled.form`
    height: 100%;
`

const TextArea = styled.textarea`
    width: 100%;
    height: 90%;
`


const BlogForm = props => {

    const [values, setValues] = useState({ content: props.content || ''})

    const onChange = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Wrapper>
            <Form
                onSubmit={e => {
                    e.preventDefault()
                    props.action({
                        variables: {
                            ...values
                        }
                    })
                }}
            >
                <TextArea
                    required
                    type='text'
                    name='content'
                    placeholder='Blog Content'
                    value={values.content}
                    onChange={onChange}
                />
                <button type='submit' className="cta">
                    <span>Post</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </Form>
        </Wrapper>
    );
}
 
export default BlogForm