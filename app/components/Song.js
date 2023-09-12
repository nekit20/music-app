import Link from 'next/link'
import styles from '../songs.module.css'
export default function Song({ track, id }) {
	return (
		<div id={styles.song}>
			<h3>{track.artist_name}</h3>
			<p><span>Track: </span>{track.track_name}</p>
			<p><span>Album: </span>{track.album_name}</p>
			<Link href={`/${id}`}><button>View Lyrics</button></Link>
		</div>
	)
}