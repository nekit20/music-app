import { Navbar } from '../components/Navbar';
import Song from '../components/Song';
import styles from '../searchPage.module.css';

const API = '61b864ad4979a12e4de8994dc026b8e1';

async function getSearchTracks(search) {
	const result = await fetch(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${search}&page_size=10&page=1&s_track_rating=desc&apikey=${API}`)
	return result.json();
}


export default async function SearchPage({ searchParams }) {
	const data = await getSearchTracks(searchParams.search);
	const tracks = data.message.body.track_list
	return (
		<div>
			<Navbar></Navbar>
			<div id={styles.searchBlock}>
				<h2>Result : {searchParams.search}</h2>
				<div id={styles.searchInnerBlock}>
					{tracks.map((item, index) => <Song key={index} track={item.track} aid={item.track.track_id} id={item.track.commontrack_id}></Song>)}
				</div>
			</div>
		</div>
	)
}