import { gql } from '@apollo/client'

const GET_BLOGS = gql`
    query blogFeed($page: Int) {
        blogFeed(page: $page) {
            blogs {
                id
                content
                favoriteCount
                author {
                    username
                    id
                    avatar
                }
                createdAt
            }
        }
    }
`

const GET_BLOG = gql`
    query getBlog($id: ID!) {
        getBlog(id: $id) {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
`

const IS_LOGGED_IN = gql`
    query isLoggedIn {
        isLoggedIn @client
    }
`

const GET_MY_BLOGS = gql`
    query myBlogs($page: Int) {
        me {
            id
            username
            blogFeed(page: $page) {
                blogs {
                    id
                    createdAt
                    content
                    favoriteCount
                    author {
                        username
                        id
                        avatar
                    }
                }
            }
        }
    }
`

const GET_ME = gql`
    query me {
        me {
            username
            id
            favorites {
                blogs {
                    id
                }
            }
        }
    }
`

const EDIT_BLOG = gql`
    mutation updateBlog($id: ID!, $content: String!) {
        updateBlog(id: $id, content: $content) {
            id
            content
            createdAt
            favoriteCount
            favoritedBy {
                id
                username
            }
            author {
                username
                id
            }
        }
    }
`

const DELETE_BLOG = gql`
    mutation deleteBlog($id: ID!) {
        deleteBlog(id: $id)
    }
`

const GET_MY_FAVORITES = gql`
    query favorites($page: Int) {
        me {
            id
            username
            favorites(page: $page) {
                blogs {
                    id
                    createdAt
                    content
                    favoriteCount
                    author {
                        id
                        avatar
                        username
                    }
                }
            }
        }
    }
`

const TOGGLE_FAVORITE = gql`
    mutation toggleFavorite($id: ID!) {
        toggleFavorite(id: $id) {
            id
            favoriteCount
        }
    }
`

export {
    GET_BLOGS,
    GET_BLOG,
    IS_LOGGED_IN,
    GET_MY_BLOGS,
    GET_MY_FAVORITES,
    GET_ME,
    EDIT_BLOG,
    DELETE_BLOG,
    TOGGLE_FAVORITE
}