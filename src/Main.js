import React from 'react'
import Banner from './app/UI/Banner'
import Home from './app/UI/Home'
import Footer from './Layout/Footer'
import Navbar from './Layout/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Home />
            <Footer />
        </div>
    )
}

export default Main