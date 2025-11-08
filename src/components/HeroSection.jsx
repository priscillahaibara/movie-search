import styles from './HeroSection.module.css'
import Carousel from './Carousel'

function HeroSection() {
    return (
        <main className={styles.main}>
            <Carousel />
        </main>
    )
}

export default HeroSection
