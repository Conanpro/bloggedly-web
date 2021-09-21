import React from 'react'
import styled from 'styled-components'
import Blog from './Blog'
import { withRouter } from 'react-router'
import { motion } from 'framer-motion'

const BlogWrapper = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 2em;
    border-bottom: 1px solid #f5f4f0;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 40px 40px 10px 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const BlogFeed = ({ blogs, reference, favs }) => {

    return (  
        <div>
            {blogs.map((blog, index) => {
                if (blogs.length === index + 1) {
                    return (
                        <BlogWrapper
                            ref={reference}
                            transition={{
                                type: 'spring',
                                bounce:  0.5,
                                duration: 0.2,
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            key={blog.id}
                        >
                            <Blog favs={favs} blog={blog} />
                        </BlogWrapper>
                    )
                } else {
                    return (
                        <BlogWrapper
                            transition={{
                                type: 'spring',
                                bounce:  0.5,
                                duration: 0.2,
                            }}
                            whileHover={{
                                scale: 1.05
                            }}
                            key={blog.id}
                            transformTemplate={(props, transform) =>
                                transform.replace(" translateZ(0)", "")
                            }
                        >
                            <Blog favs={favs} blog={blog} />
                        </BlogWrapper>
                    )
                }
            })}
        </div>
    );
}
 
export default withRouter(BlogFeed)