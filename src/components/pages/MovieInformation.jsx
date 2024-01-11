import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa6";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styles from "./MovieInformation.module.css"

function MovieInformation() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null)

    function fetchData() {
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-br`, {
            method: "GET",
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGIyOGY2NGUxNGU0YTIwMjEyZjYyZTAwZjdmZTU2OSIsInN1YiI6IjY1OTQ0MjJjNmFhOGUwNjJkM2VhZmVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-nK5fnF2DSTMp3F0J2Iv-7I8Wv7k7aJ1kx_glHAs4J0'
            }
        })
            .then((resp) => resp.json())
            .then((data) => setMovie(data))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        fetchData();
    }, [])

    function getYearFromDate(date) {
        let year = new Date(date).getFullYear();
        return year;
    }

    return (
        <>
            <Header />
            <section className={styles.container}>
                <div className={styles.information_card}>
                    {movie && (
                        <>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                            <div className={styles.informations_place}>
                                <h2>{movie.title}</h2>
                                <span>
                                    <FaStar className={styles.star_svg} />
                                    <h3>{movie.vote_average.toFixed(2)}</h3>
                                </span>
                                <span>
                                    <h3>{getYearFromDate(movie.release_date)}</h3>
                                    <h3>{movie.runtime} minutos</h3>
                                </span>
                                <p>{movie.tagline}</p>
                                <h4>{movie.overview}</h4>
                            </div>
                        </>
                    )}
                    {!movie && (
                        <>
                            <h3>Carregando...</h3>
                        </>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}
export default MovieInformation