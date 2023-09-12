
import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from './components/Navbar'
import { Songs } from './components/Songs'




export default async function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Songs></Songs>
    </div>
  )
}
