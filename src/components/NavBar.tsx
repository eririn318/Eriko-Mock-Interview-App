import { NavLink } from "react-router-dom"
import SearchBar from "./SearchBar"
// import { IoSearch } from "react-icons/io5";


function NavBar() {
    return(
        <nav className="flex justify-end gap-10 dark:bg-[#B0A4A4] dark:text-white h-15 border-1 pr-5 bg-[#FAF3F0]">

     <NavLink to="/" className="mt-4">Home</NavLink>
     <SearchBar/> 
 
        </nav>
    )
}

export default NavBar

// Use	When
// <NavLink to="/search">	Static links (navbar, menu)/need to be clickable
// navigate("/search?q=react")	Dynamic navigation (search, login, submit)

