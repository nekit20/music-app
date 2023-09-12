'use client'
import { useState } from 'react'
import styles from '../search.module.css';
import Link from 'next/link';
export default function Search({ setSearch }) {
	const [input, setInput] = useState('')

	const onHandleChange = (e) => {
		setInput(e.target.value)
	}


	return (
		<div id={styles.searchDiv}>
			<input id={styles.input} value={input} onChange={onHandleChange} type='text' placeholder='Song title...'></input>
			<Link href={{ pathname: '/search', query: { search: input } }}><button>Get track lyrics</button></Link>
		</div>
	)

}