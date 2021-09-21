import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import BlogFeed from '../components/BlogFeed'
import Loading from '../components/Loading'
import { GET_BLOGS } from '../gql/query'

const Home = () => {

    const {fetchMore, error} = useQuery(GET_BLOGS)

    if (error) return <p>Error loading blogs</p>

    const [blogs, setBlogs] = useState([])

    const [loading, setLoading] = useState(true)

    const [page, setPage] = useState(1)

    const [hasNextPage, setHasNextPage] = useState(true)

    const observer = useRef()
    const lastBlogElementRef = useCallback((node) => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasNextPage === true) {
                setLoading(true)
                setPage(page + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [blogs])

    useEffect(() => {
        fetchMore({
            variables: {
                page
            }
        }).then((data) => {
            if (data.data.blogFeed.blogs[data.data.blogFeed.blogs.length - 1] === blogs[blogs.length - 1]) {
                setHasNextPage(false)
            }
            if(data.data.blogFeed.blogs.length < 10) {
                setHasNextPage(false)
            } else if (hasNextPage === false) {
                setHasNextPage(true)
            }
            setBlogs([...blogs, ...data.data.blogFeed.blogs])
            setLoading(false)
        })
    }, [page])

    useEffect(() => {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    })

    return (
        <div id='wrap' >
            <BlogFeed
                reference={lastBlogElementRef}
                onScroll={() => {
                    console.log(8)
                }}
                blogs={blogs}
            />
            {loading && <Loading />}
        </div>
    )
}

export default Home