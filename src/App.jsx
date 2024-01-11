import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'
import MovieInformation from './components/pages/MovieInformation'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/Movie-Guide/" element={<Home />}></Route>
        <Route path="/Movie-Guide/search" element={<Search />}></Route>
        <Route path="/Movie-Guide/movie-information/:id" element={<MovieInformation />}></Route>
      </Routes>
    </Router>

  )
}

export default App
