import { hamburger } from '../assets/icons'
import { menuList } from '../constants'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <section>
            <div className='flex flex-row justify-between items-center m-6'>
                <p className='text-4xl text-cyan-500 p-4 font-bold'>Badrinath Academy</p>
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
            </div>
        </section> 
    )
}

export default NavBar