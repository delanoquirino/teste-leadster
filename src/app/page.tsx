
import { Header } from '@/components/Header'
import styles from './page.module.css'
import { FeaturedSection } from '@/components/FeaturedSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <FeaturedSection/>
    </main>
  )
}
