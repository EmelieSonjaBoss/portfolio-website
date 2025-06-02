import styles from './HeroSection.module.css';
import heroImage from '../assets/images/imagesmall2.jpg';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img src={heroImage} alt="Hero background" className={styles.heroImage} />
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>EmelieBoss</h1>
        <h2>Frontend Developer</h2>
        <h3>{`- Crafting Digital Solutions -`}</h3>
      </div>
    </section>
  );
};

export default HeroSection; 