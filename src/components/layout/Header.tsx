import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.h2}></h2>
      <nav className={styles.nav}>
        <a className={styles.a} href="#profile-section">Profile</a>
        <a className={styles.a} href="#works-section">Works</a>
        <a className={styles.a} href="#about-section">About</a>
        <a className={styles.a} href="#contact-section">Contact</a>
      </nav>
    </header>
  )
}

export default Header
