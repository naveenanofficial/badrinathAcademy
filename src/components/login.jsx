import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {

    const {register, handleSubmit} = useForm()
    const [userValid, setUserValid] = useState(false)
    const [pwdValid, setPwdValid] = useState(false)
    const navigate = useNavigate()

    function onSubmit(data, e) {
        let user = JSON.parse(sessionStorage.getItem(data.username))
        if(user == null)
            console.log("User not registered")
        else if(user.password !== data.password) {
            console.log("Invalid username and password")
        } else {
            sessionStorage.setItem("loggedUser", sessionStorage.getItem(data.username))
            navigate('/home', {replace:true})
        }
    }

    function onError(data, e) {
        (typeof data.username !== 'undefined' &&  data.username.type === 'required')
        ? setUserValid(true) : setUserValid(false);
        (typeof data.password !== 'undefined' &&  data.password.type === 'required')
        ? setPwdValid(true) : setPwdValid(false)
    }

    return (
    <div className="flex justify-center flex-col items-center my-4 min-h-screen bg-lime-500">
        <h3 className="items-center text-3xl text-white m-8">Login to our platform</h3>
        <form onSubmit={handleSubmit(onSubmit, onError)} 
        className="w-full max-w-lg flex flex-col justify-between py-4 px-4 mx-12 bg-white rounded shadow-xl">
            <div className="mb-6">
                <label for="name" className="block text-gray-800 font-bold">
                    User Name
                </label>
                <input type="text" name="name" id="name" placeholder="user name"
                {...register("username", {
                    required:true
                })} 
                className={"w-full border py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 " + (userValid  ? 'border-red-500' : 'border-gray-300')}/>
            </div>

            <div className="mb-6">
                <label for="password" className="block text-gray-800 font-bold">
                    Password
                </label>
                <input type="password" placeholder="password" 
                {...register("password", {
                    required:true
                })} 
                className={"w-full border py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 " + (pwdValid ? 'border-red-500' : 'border-gray-300')}/>
            </div>

            <button className="cursor-pointer py-2 px-4 block nt-6 bg-indigo-500 text-white font-bold text-center rounded">
                Login
            </button>
        </form>
    </div>
)
}

export default Login