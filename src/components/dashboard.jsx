import { Link } from "react-router-dom"
import { study } from "../assets/images"
import { subText, subText1, subText2 } from "../constants"
import Moon from "../icons/Moon"
import { useState } from "react"

const Dashboard = () => {

    const [isDark, setIsDark] = useState(document.documentElement.classList.contains("dark"))
    
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
        <div>
              <div className="flex w-full font-bold font-novasquare p-4 items-center justify-between dark:bg-zinc-800">
              <p className="text-4xl text-cyan-500 p-4">Badrinath Academy</p>
              <button onClick={changeTheme}><Moon colour={isDark ? "#ffffff" :  "#010002"}/></button>
              </div>
              <div className="flex flex-row max-md:flex-col bg-violet-500 dark:bg-zinc-900">
                <div className="relative flex flex-col justify-center items-start ms-4 me-16 items-start">
                <p className="text-white text-3xl font-afacad capitalize">{subText}</p><br/>
                <p className="text-white text-3xl font-afacad capitalize">{subText1}</p><br/>
                <p className="text-white text-xl font-semibold font-kalnia">{subText2}</p>
                <div className="flex flex-row space-x-4 mt-8">
                <button className='button-cyan-fill'><Link to='/register'>Join Class</Link></button>
                <button className='button-cyan-fill'><Link to='/login'>Login</Link></button>
                </div>
            </div>
            <img src={study} height={500} width={500} aspect-square className="m-16"/>
        </div>
        </div>
    )
}

export default Dashboard