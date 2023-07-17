import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from './../../features/Slices/themeSlice'
import classes from './Navbar.module.scss'

const Navbar = () => {

    const [navBg, setNavBg] = useState(false);
    const dispatch = useDispatch()

    const theme = useSelector((state) => state.theme.currentTheme)

    const changeNavBg = () => {
        window.scrollY >= 50 ? setNavBg(true) : setNavBg(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, [])

    return (
        <div className={`px-20 py-3 flex items-center fixed top-0 left-0 w-full ${navBg === true ? 'bg-white shadow text-black' : 'bg-transparent text-white'}`}>
            <div className='flex justify-start w-1/4'>
                <div className="flex justify-evenly">
                    <h3 className='font-inter text-xl font-bold'>NonceCoin</h3>
                    <div style={{ borderLeft: '1px solid #D0D0D0' }}></div>
                    <div className='w-1/6 flex justify-evenly'>
                        <h5 className='font-inter font-semibold'>Drops</h5>
                        <h5 className='font-inter font-semibold'>Stats</h5>
                    </div>
                </div>

            </div>
            <div className={`${classes.serach_warpper} w-1/2`} >
                <input className={`${navBg === true ? classes.scroll_search : classes.search}`} type="text" />
            </div>
            <div className='w-1/4 flex items-center justify-center'>
                <div className='flex items-center'>
                    <div className='px-3 py-3 flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${navBg === true ? 'black' : 'white'}`} className="w-6 h-6">
                            <path d="M2.273 5.625A4.483 4.483 0 015.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 3H5.25a3 3 0 00-2.977 2.625zM2.273 8.625A4.483 4.483 0 015.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0018.75 6H5.25a3 3 0 00-2.977 2.625zM5.25 9a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3H15a.75.75 0 00-.75.75 2.25 2.25 0 01-4.5 0A.75.75 0 009 9H5.25z" />
                        </svg>
                        <h5 className='font-inter font-semibold'>Connect Wallet</h5>
                    </div>
                    <div className='h-10' style={{ borderLeft: '0px solid #D0D0D0' }}></div>
                    <div className='px-3 py-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${navBg === true ? 'black' : 'white'}`} className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={`${navBg === true ? 'black' : 'white'}`} className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Navbar