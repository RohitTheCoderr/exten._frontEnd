import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from "../../libs/zustand";
function Header() {

    const { removeToken, token } = useAuthStore((state) => state);
    const isLoggedIn = !!token;


    return (
        <div className='flex justify-between px-12 items-center h-[5rem]'>
            <div className='font-sans font-bold text-3xl'>logo</div>
            <nav className='flex justify-center items-center gap-4 bg-pink-500 list-none'>
              <Link to={"/"}> <li className='text-lg'>home </li></Link> 
             
              <Link to={"/login"}> <li className='text-lg'>login </li></Link> 
              <Link to={"/signUp"}> <li className='text-lg'>signUp </li></Link> 
            </nav>
            
        </div>
    )
}

export default Header