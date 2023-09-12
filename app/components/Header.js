import Link from "next/link"

export const Header = () => {
	return (
		<header style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: 20 }}>
			<h2><Link href="/">LyricFinder</Link></h2>
		</header>
	)
}