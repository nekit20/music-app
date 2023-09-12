import Link from 'next/link';
import styles from '.././lyricpage.module.css'
import Image from 'next/image'

export async function generateMetadata({ params: { id } }) {
	const data = await getTrack(id);
	const track = data.message.body.track;

	return { title: track.track_name + " - " + track.artist_name }
}

async function getLyric(id) {
	const response = await fetch(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=${id}&apikey=61b864ad4979a12e4de8994dc026b8e1`
	);

	return response.json();
}

async function getTrack(id) {
	const response = await fetch(`https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${id}&apikey=61b864ad4979a12e4de8994dc026b8e1`
	);

	return response.json();
}



export default async function Lyric({ params: { id } }) {
	const data1 = await getTrack(id);
	const data2 = await getLyric(id);
	const track = data1.message.body.track;
	const lyric = data2.message.body.lyrics.lyrics_body.replace(/\n/g, "<br />");
	return (
		<div id={styles.lyricBlock}>

			<div id={styles.info}>
				<Link href="/"><button>{'Назад <'}</button></Link>
				<p id={styles.headerLyric}>{track.track_name} - {track.artist_name}</p>
				<p>{track.album_name}</p>

			</div>
			<p dangerouslySetInnerHTML={{ __html: lyric }}></p>
		</div>
	)
}