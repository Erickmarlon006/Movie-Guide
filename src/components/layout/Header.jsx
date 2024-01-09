import { IoSearch } from "react-icons/io5";
import styles from "./Header.module.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
function Header() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault();
        if (!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <header className={styles.header}>
            <nav>
                <Link to="/" element={<Home />}><h3>Movie Guide</h3></Link>
            </nav>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Pesquise um título" value={search} />
                <button type="submit"><IoSearch /></button>
            </form>
        </header>
    )
}
export default Header