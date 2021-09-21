import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from './home'
import MyBlogs from './myblogs'
import Favorites from './favorites'
import Layout from '../components/Layout'
import BlogPage from '../pages/blog'
import SignUp from './signUp';
import SignIn from './signIn';
import { useQuery } from '@apollo/client';
import NewBlog from './new';
import EditBlog from './edit'
import { IS_LOGGED_IN } from '../gql/query'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home}/>
                <PrivateRoute path="/myblogs" component={MyBlogs}/>
                <PrivateRoute path="/favorites" component={Favorites}/>
                <PrivateRoute path="/edit/:id" component={EditBlog} />
                <Route path="/blog/:id" component={BlogPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIn} />
                <PrivateRoute path="/new" component={NewBlog} />
            </Layout>
        </Router>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { loading, error, data } = useQuery(IS_LOGGED_IN)

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error!</p>

    return (
        <Route
            {...rest}
            render={props =>
                data.isLoggedIn === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: '/signin',
                        state: { from: props.location }
                    }} />
                )
            }
        />
    )
}

export default Pages