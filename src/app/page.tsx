
import { Header } from '@/components/Header'
import styles from './page.module.css'
import { FeaturedSection } from '@/components/FeaturedSection'
import { CardsSection } from '@/components/CardsSection'
import { DemonstrationSection } from '@/components/DemonstrationSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <FeaturedSection/>
      <CardsSection/>
      <DemonstrationSection/>
      <Footer/>
    </main>
  )
}
