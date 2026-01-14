import styles from "./ContactSection.module.css"


const ContactSection = () => {
  return (

    <section id="contact-section" className={styles.section}>
      <h2 className={styles.h2}>Contact</h2>
      <div className={styles.text}>
        <p>テキストテキストテキストテキストテキストテキスト</p>
        <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
      <div className={styles.mail}>
        <p>Mail:</p>
        <a className={styles.adress} href="mailto:noichi.sy@gmail.com">noichi.sy@gmail.com</a>
      </div>
      <div className={styles.link}>
        <div className={styles.flex}>
          <img src="logos/github.svg" alt="" className={styles.logo}/>
          <a href="" className={styles.a}>GitHub</a>
        </div>
        <div className={styles.flex}>
          <img src="logos/vercel.svg" alt="" className={styles.logo}/>
          <a href="" className={styles.a}>Vercel</a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
