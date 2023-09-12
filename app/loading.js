import Image from 'next/image'
import styles from './lyricpage.module.css'
export default function LoadingPosts() {
	return (
		<div id={styles.loading}>
			<Image id={styles.img} src="/loading.png" width={100} height={100} alt='loading'></Image>
		</div>
	)
}