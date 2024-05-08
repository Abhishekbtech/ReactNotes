import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './1.HomePage/HomePage'
import SingIn from './2.SingIn.js/SingIn'
import LoginPage from './3.LoginPage/LoginPage'
import UserData from './3.LoginPage/UserData'
import AboutPage from './4.About/AboutPage'
import NoPageFound from './5.NoPageFound/NoPageFound'
import Line from './4.About/LinePage/Line'
import MyGitHub from './6.GitHub/MyGitHub'

function ReactRouter() {
    return (
        <Router>
            <h1>React Router</h1>
            <nav>
                <NavLink to='/' style={{margin:10}} activeStyle={{color: 'yellow', textDecoration: 'underline'}}>Home</NavLink>
                <NavLink to='/singIn' style={{margin:10}}>Sing In</NavLink>
                <NavLink to='/login'style={{margin:10}}>Log In</NavLink>
                <NavLink to='/about'style={{margin:10}}>About</NavLink>
                <NavLink to='/github'style={{margin:10}}>My Github</NavLink>
            </nav>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/singIn' element={<SingIn/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='/userData' element={<UserData/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/about/post/:id' element={<Line/>}/>
                <Route path='/github' element={<MyGitHub/>}/>
                <Route path='*' element={<NoPageFound/>}/>
            </Routes>
        </Router>
    )
}

export default ReactRouter