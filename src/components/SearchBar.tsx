// import {useState} from "react"
// import { IoSearch } from "react-icons/io5"
// import { useNavigate } from "react-router-dom"


// function SearchBar() {
//     const navigate = useNavigate()
//     const [searchInput, setSearchInput] = useState('')

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault()
//         navigate(`/search?q=${searchInput}`)    
//         setSearchInput("")
//     }

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
//         setSearchInput(e.target.value.toLowerCase())
//     }

   
//     return(
//         <>
//         <form 
//         onSubmit={handleSubmit}
//         className="flex items-center border-1 rounded-sm h-8 pl-2 pr-2 mt-3">
//             <input placeholder="search"  
//             className="flex-1 outline-none"
//             type="text"
//             onChange={handleChange}
//             value={searchInput}
//             >
//             </input>
//             <IoSearch className="text-gray-400" />
//         </form>

//         </>
//     )
// }

// export default SearchBar

import {useState} from "react"
import { IoSearch } from "react-icons/io5"
import { useNavigate } from "react-router-dom"


function SearchBar() {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        navigate(`/search?q=${searchInput}`)    
        setSearchInput("")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
        setSearchInput(e.target.value.toLowerCase())
    }

   
    return(
        <>
        <form 
        onSubmit={handleSubmit}
        className="flex items-center border-1 rounded-sm h-8 pl-2 pr-2 mt-3">
            <input placeholder="search"  
            className="flex-1 outline-none placeholder-white "
            type="text"
            onChange={handleChange}
            value={searchInput}
            >
            </input>
            <IoSearch className="text-gray-800 dark:text-white" />
        </form>

        </>
    )
}

export default SearchBar