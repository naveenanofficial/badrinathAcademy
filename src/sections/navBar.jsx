import { hamburger } from '../assets/icons'
import { menuList } from '../constants'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Moon from "../icons/Moon"

const NavBar = () => {
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"))

    useEffect(() => {
        localStorage.getItem("isDark") === 'true' ? setIsDark(true) : setIsDark(false)
      }, [])
    
    const changeTheme = () => {
        setIsDark(!isDark)
        if(document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("isDark", false)
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem("isDark", true)
        }
        console.log(isDark)
    }
    return (
        <nav>
            <div className="flex w-full font-bold font-novasquare p-4 items-center bg-lime-300 justify-between max-md:p-2 dark:bg-zinc-900">
                <h1 className="text-4xl transform -skew-y-3 m-4 text-white bg-lime-500 p-2 rounded-tr-xl max-md:text-2xl dark:bg-zinc-700">
                    <span className="text-5xl max-md:text-3xl">B</span>adrinath Academy
                </h1>
                <div className='flex flex-row mx-2 items-center hidden'> 
                    <ul className='max-md:hidden'> {
                        menuList.map((menu, index) => (
                            <li className='text-xl rounded-full float-left hover:text-orange-500 p-4 hover:border-orange-500'>
                                <Link to={menu.href}>{menu.label}</Link>
                            </li>
                        ))
                        }
                    </ul>
                    <button><img src={hamburger} className='mx-4 max-md:block hidden' width={24} height={24} /></button>
                </div>
              <button onClick={changeTheme}><Moon colour={isDark ? "#ffffff" :  "#010002"}/></button>
              </div>
        </nav> 
    )
}

export default NavBar