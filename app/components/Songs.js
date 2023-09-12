
import styles from '../songs.module.css'
import Song from './Song';
const API = '61b864ad4979a12e4de8994dc026b8e1';
async function getTracks() {
	const response = await fetch(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ru&f_has_lyrics=1&apikey=${API}`)
	return response.json();
}

export const Songs = async () => {
	const data = await getTracks();
	const songs = data.message.body.track_list;
	return (
		<div id={styles.songs}>
			<h2>Top 10 Tracks</h2>
			<div id={styles.songList}>
				{songs.map((item, index) => <Song key={index} track={item.track} aid={item.track.track_id} id={item.track.commontrack_id}></Song>)}
			</div>
		</div>
	)

}
