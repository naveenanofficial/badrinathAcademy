import { useState } from "react"

const SuccessCard = ({message}) => {

    const [close , setClose] = useState(false)

    return (
        <div
        className={"flex items-center p-6 mb-4 text-red-600 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 " + (close ? "hidden" : "show")} role="alert"> 
        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/> </svg> <span class="sr-only">Info</span> 
        <div className="ms-3 text-md font-medium"> 
        {message}
        </div> 
        <button type="button" onClick={() => {
            setClose(!close)
            console.log(close)
        }}
        className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-purple-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close"> 
        <span className="sr-only">Close</span> 
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/> </svg> </button> </div>
    )
}

export default SuccessCard