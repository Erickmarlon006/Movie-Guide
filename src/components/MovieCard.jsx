import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types"
import styles from "./MovieCard.module.css"

function MovieCard({ movie }) {
    function getYearFromDate(date) {
        let year = new Date(date).getFullYear();
        return year;
    }
    return (
        <div className={styles.movie_card}>
            <Link to={`/Movie-Guide/movie-information/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <div>
                    <h3>{movie.title}</h3>
                    <p>{getYearFromDate(movie.release_date)}</p>
                    <div className={styles.vote_average_place}>
                        <FaStar className={styles.star_svg} />
                        <p>{movie.vote_average.toFixed(2)}</p>
                    </div>

                </div>
            </Link>
        </div>

    )
}
MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}
export default MovieCard