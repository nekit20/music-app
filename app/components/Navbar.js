import Search from './Search'
import styles from '../navbar.module.css'

export const Navbar = ({ setSearch }) => {
	return (
		<div id={styles.navbar}>
			<h1>Search for a song</h1>
			<p>Get the lyrics for any track</p>
			<Search setSearch={setSearch}></Search>
		</div>
	)
}