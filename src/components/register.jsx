import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const Register = (props) => {

    const {register, handleSubmit} = useForm()
    const [userValid, setUserValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [pwdValid, setPwdValid] = useState(false)
    const navigate = useNavigate()

    function onSubmit(data, e) {
        sessionStorage.setItem(data.username, JSON.stringify(data))
        sessionStorage.setItem("loggedUser", sessionStorage.getItem(data.username))
        navigate("/home",{replace:true})
    }

    const onError = (data, e) => {
        (typeof data.username !== 'undefined' &&  data.username.type === 'required')
            ? setUserValid(true) : setUserValid(false);
        (typeof data.email !== 'undefined' &&  data.email.type === 'required')
            ? setEmailValid(true) : setEmailValid(false);
        (typeof data.password !== 'undefined' &&  data.password.type === 'required')
            ? setPwdValid(true) : setPwdValid(false)
       
    }

    return (
    <div className="bg-cyan-500 flex min-h-screen justify-center flex-col items-center">
        <h3 className="items-center text-4xl text-bold m-8">Register to our platform</h3>
        <form onSubmit={handleSubmit(onSubmit, onError)} 
            className="w-full max-w-lg flex flex-col justify-between py-4 px-4 mx-12 bg-white rounded shadow-xl">
            <div className="mb-4">
                <label for="name" className="block text-gray-800 font-bold">
                    User Name
                </label>
                <input type="text" name="name" id="name" placeholder="user name"
                {...register("username", {
                    required : true
                })} 
                className={"w-full border py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 " + (userValid  ? 'border-red-500' : 'border-gray-300')}/>
            </div>

            <div className="mb-4">
                <label for="email" 
                className="block text-gray-800 font-bold">
                    Email
                </label>
                <input type="text" placeholder="@email" 
                {...register("email", {
                    required:true
                })} 
                className={"w-full border py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 " + (emailValid ? 'border-red-500' : 'border-gray-300')}/>
            </div>

            <div className="mb-4">
                <label for="Password" className="block text-gray-800 font-bold">
                    Password
                </label>
                <input type="password" placeholder="password" 
                {...register("password", {
                    required : true
                })} 
                className={"w-full border py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 " + (pwdValid ? 'border-red-500' : 'border-gray-300')}/>
            </div>
            <a href="/" className="text-sm font-thin text-blue-700 font-medium hover:underline mt-1 mb-8 inline-block hover:text-indigo-600">
                Forget Password?
            </a>
            <button className="cursor-pointer py-2 px-4 block nt-6 bg-indigo-500 text-white font-bold text-center rounded">Register</button>
        </form>
    </div>
)}

export default Register