"use client"
import { useScrollManager } from "@/animation/ScrollBg"
import styles from "./Header.module.css"

const Header = () => {
  const isVisible = useScrollManager()

  return (
    <header className={styles.header} style={{transform: isVisible ? "translateY(0)" : "translateY(-100%)"}}>
      <h2 className={styles.h2}></h2>
      <nav className={styles.nav}>
        <a className={styles.a} href="#profile-section">Profile</a>
        <a className={styles.a} href="#works-section">Works</a>
        <a className={styles.a} href="#about-section">About</a>
      </nav>
    </header>
  )
}

export default Header
