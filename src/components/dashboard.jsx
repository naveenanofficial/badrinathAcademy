import { Link } from "react-router-dom"
import { study } from "../assets/images"
import { subText, subText1, subText2 } from "../constants"

const Dashboard = () => {

    return (
        <div>
              <div className="mt-8">
                <div 
                className="relative flex flex-col justify-center items-start px-8 py-20 me-64 rounded-r-3xl items-start bg-sky-500 dark:bg-zinc-900 max-md:me-16 max-md:p-16">
                <p className="mx-8 text-blue-950 font-bold text-3xl font-afacad capitalize max-md:text-xl dark:text-white">{subText}</p><br/>
                <p className="mx-8 text-blue-950 font-bold text-3xl font-afacad capitalize max-md:text-xl dark:text-white">{subText1}</p><br/>
                <p className="mx-8 text-blue-950 text-xl font-semibold font-kalnia dark:text-white">{subText2}</p>
                <div className="flex flex-row space-x-4 ms-8 mt-8">
                <button className='button-lime-fill text-blue-950'><Link to='/register'>Join Class</Link></button>
                <button className='button-lime-fill text-blue-950'><Link to='/login'>Login</Link></button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Dashboard