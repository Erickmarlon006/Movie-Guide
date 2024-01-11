import { useState, useEffect, useRef } from "react";
import { FaArrowLeft } from "react-icons/fa";
import MovieCard from "./MovieCard";
import { FaArrowRight } from "react-icons/fa";
import styles from "./Content.module.css"

function Content() {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [popularMovies, setPopularMovies] = useState([])
    const [nowPlayingMovies, setNowPlayingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    const carousel1 = useRef(null);
    const carousel2 = useRef(null);
    const carousel3 = useRef(null);
    const carousel4 = useRef(null);

    useEffect(() => {
        getTopRatedMovies();
        getPopularMovies();
        getNowPlayingMovies();
        getUpcomingMovies();
    }, [])

    function getTopRatedMovies() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=pt-br&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGIyOGY2NGUxNGU0YTIwMjEyZjYyZTAwZjdmZTU2OSIsInN1YiI6IjY1OTQ0MjJjNmFhOGUwNjJkM2VhZmVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nK5fnF2DSTMp3F0J2Iv-7I8Wv7k7aJ1kx_glHAs4J0'

            }
        })
            .then(resp => resp.json())
            .then(data => setTopRatedMovies(data.results))
            .catch(err => console.error(err));


    }
    function getPopularMovies() {
        fetch('https://api.themoviedb.org/3/movie/popular?language=pt-br&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGIyOGY2NGUxNGU0YTIwMjEyZjYyZTAwZjdmZTU2OSIsInN1YiI6IjY1OTQ0MjJjNmFhOGUwNjJkM2VhZmVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nK5fnF2DSTMp3F0J2Iv-7I8Wv7k7aJ1kx_glHAs4J0'

            }
        })
            .then(resp => resp.json())
            .then(data => setPopularMovies(data.results))
            .catch(err => console.error(err));
    }
    function getNowPlayingMovies() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=pt-br&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGIyOGY2NGUxNGU0YTIwMjEyZjYyZTAwZjdmZTU2OSIsInN1YiI6IjY1OTQ0MjJjNmFhOGUwNjJkM2VhZmVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nK5fnF2DSTMp3F0J2Iv-7I8Wv7k7aJ1kx_glHAs4J0'

            }
        })
            .then(resp => resp.json())
            .then(data => setNowPlayingMovies(data.results))
            .catch(err => console.error(err));
    }
    function getUpcomingMovies() {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=pt-br&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGIyOGY2NGUxNGU0YTIwMjEyZjYyZTAwZjdmZTU2OSIsInN1YiI6IjY1OTQ0MjJjNmFhOGUwNjJkM2VhZmVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nK5fnF2DSTMp3F0J2Iv-7I8Wv7k7aJ1kx_glHAs4J0'
            }
        })
            .then(resp => resp.json())
            .then(data => setUpcomingMovies(data.results))
            .catch(err => console.error(err));
    }

    function handleLeftClick(e, carousel) {
        e.preventDefault();
        carousel.current.scrollLeft -= (carousel.current.offsetWidth - 200)
    }
    function handleRightClick(e, carousel) {
        e.preventDefault();
        carousel.current.scrollLeft += (carousel.current.offsetWidth - 200)
    }
    return (
        <main>
            <section>
                <h3>Filmes melhor avaliados</h3>
                <button onClick={(e) => handleLeftClick(e, carousel1)} className={`${styles.arrow_left} control`}><FaArrowLeft /></button>
                <button onClick={(e) => handleRightClick(e, carousel1)} className={`${styles.arrow_right} control`}><FaArrowRight /></button>
                <div className={styles.wrapper} ref={carousel1} >
                    <div id="top_rated_movies" className={styles.movies_list}>
                        {topRatedMovies && topRatedMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <h3>Filmes Populares</h3>
                <button onClick={(e) => handleLeftClick(e, carousel2)} className={`${styles.arrow_left} control`}><FaArrowLeft /></button>
                <button onClick={(e) => handleRightClick(e, carousel2)} className={`${styles.arrow_right} control`}><FaArrowRight /></button>
                <div className={styles.wrapper} ref={carousel2}>
                    <div id="popular_movies" className={styles.movies_list}>
                        {popularMovies && popularMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <h3>Estréias</h3>
                <button onClick={(e) => handleLeftClick(e, carousel3)} className={`${styles.arrow_left} control`}><FaArrowLeft /></button>
                <button onClick={(e) => handleRightClick(e, carousel3)} className={`${styles.arrow_right} control`}><FaArrowRight /></button>
                <div className={styles.wrapper} ref={carousel3}>
                    <div id="now_playing_movies" className={styles.movies_list}>
                        {nowPlayingMovies && nowPlayingMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <h3>Em breve</h3>
                <button onClick={(e) => handleLeftClick(e, carousel4)} className={`${styles.arrow_left} control`}><FaArrowLeft /></button>
                <button onClick={(e) => handleRightClick(e, carousel4)} className={`${styles.arrow_right} control`}><FaArrowRight /></button>
                <div className={styles.wrapper} ref={carousel4}>
                    <div id="upcoming_movies" className={styles.movies_list}>
                        {upcomingMovies && upcomingMovies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </main>

    )

}
export default Content