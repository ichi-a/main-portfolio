import styles from "./ContactSection.module.css"


const ContactSection = () => {
  return (

    <section id="contact-section" className={styles.section}>
      <div className={styles.titleWrap}>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.text}>
          <p>テキストテキストテキストテキストテキストテキスト</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
        <div className={styles.mail}>

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
      </div>
    </section>
  )
}

export default ContactSection;
