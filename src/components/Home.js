import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './layout/Header'


function Home() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>
            <div className="registration">
                <h3>Register New Users!</h3>
            </div>
        </div>
    )
}

export default Home
