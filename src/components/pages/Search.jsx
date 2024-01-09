import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Header from "../layout/Header"
import Footer from "../layout/Footer"
import MovieCard from "../MovieCard"
import styles from "./Search.module.css"
function Search() {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])
    const query = searchParams.get("q");

    useEffect(() => {
        getSearchedMovies();
    }, [query])

    function getSearchedMovies() {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=pt-br`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGIyOGY2NGUxNGU0YTIwMjEyZjYyZTAwZjdmZTU2OSIsInN1YiI6IjY1OTQ0MjJjNmFhOGUwNjJkM2VhZmVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nK5fnF2DSTMp3F0J2Iv-7I8Wv7k7aJ1kx_glHAs4J0'

            }
        })
            .then(resp => resp.json())
            .then(data => setMovies(data.results))
            .catch(err => console.error(err));


    }
    return (
        <>
            <Header />
            <section className={styles.container}>
                <h2>Resultados para: <span className="query_text">{query}</span></h2>
                {movies.length > 0 ? (
                    <div id="searched_movies" className={styles.movies_list}>
                        {movies && movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}

                    </div>
                ) : (
                    <h3>Nenhum filme encontrado...</h3>
                )}
            </section>
            <Footer />
        </>
    )
}
export default Search