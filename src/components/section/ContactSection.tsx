import styles from "./ContactSection.module.css"


const ContactSection = () => {
  return (

    <section id="contact-section" className={styles.section}>
      <div className={styles.titleWrap}>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.text}>
          <p>上記のほか、Firebaseなども猛勉強中です！</p>
          <p>コードを書くことを楽しみ、アプリを作ることを楽しみながら毎日学習を続けています。</p>
          <p>日々の生活の一瞬を彩る、楽しめるサービスを作っていきたいです。</p>
        </div>
        <div className={styles.mail}>

        </div>
        <div className={styles.link}>
          <div className={styles.flex}>
            <img src="logos/github.svg" alt="" className={styles.logo}/>
            <a target="blank" href="https://github.com/ichi-a" className={styles.a}>GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection;
