import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import MovieInformation from './components/pages/MovieInformation'
import Search from './components/pages/Search'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/movie-information/:id" element={<MovieInformation />}></Route>
      </Routes>
    </Router>

  )
}

export default App
