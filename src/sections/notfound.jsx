import { Link, useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate()

    let isLoggedIn = sessionStorage.getItem("loggedUser") === null

    return (
    <section className="min-h-screen dark:bg-black">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-cyan-500 md:text-4xl dark:text-cyan-500">Something's missing.</p>
            <p className="mb-12 text-lg font-medium text-cyan-500 dark:text-cyan-500">Sorry, we can't find that page. You'll find lots to explore on the Dashboard. </p>
            <Link to={isLoggedIn ? "/" : "/home"} onClick={() => { 
                isLoggedIn ? navigate("/", {replace:true}) : navigate("home", {replace:true})
             }}
            className="button-purple-outline">
               { isLoggedIn ? "Go to DashBoard" : "Go to Home" }
            </Link>
        </div>   
    </div>
</section>
)}

export default NotFound