
import { Header } from '@/components/Header'
import styles from './page.module.css'
import { FeaturedSection } from '@/components/FeaturedSection'
import { CardsSection } from '@/components/CardsSection'
import { DemonstrationSection } from '@/components/DemonstrationSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <FeaturedSection/>
      <CardsSection/>
      <DemonstrationSection/>
    </main>
  )
}
