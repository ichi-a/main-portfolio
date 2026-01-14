import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <small>&copy; Shouhei Noichi</small>
      <nav className={styles.nav}>
        <a className={styles.a} href="#profile-section">Profile</a>
        <a className={styles.a} href="#works-section">Works</a>
        <a className={styles.a} href="#about-section">About</a>

      </nav>
    </footer>
  )
}

export default Footer
