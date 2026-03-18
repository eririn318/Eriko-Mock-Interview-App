
import { Route,Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import SearchResult from "./pages/SearchResult"




function App() {
	return(
		<div>
			<NavBar/>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/search" element={<SearchResult/>}/>
			</Routes>
		</div>
	)
}

export default App


