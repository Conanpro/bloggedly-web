import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './home'
import MyBlogs from './myblogs'
import Favorites from './favorites'
import Layout from '../components/Layout';

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home}/>
                <Route path="/myblogs" component={MyBlogs}/>
                <Route path="/favorites" component={Favorites}/>
            </Layout>
        </Router>
    )
}

export default Pages