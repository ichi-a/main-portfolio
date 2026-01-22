
import styles from "./ProfileSection.module.css"


const ProfileSection = () => {
  return (
    <section className={styles.section} id="profile-section">
      <div className={styles.titleWrap}>
        <h1 className={styles.h1}>Profile</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.profCenter}>
          <div className={styles.imgwrap}>
            <img className={styles.img} src="/logos/github.svg" alt=""/>
          </div>
          <p className={styles.p}>Shouhei Noichi</p>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textWrap}>
            <p className={styles.line1}>テキストテキストテキストテキストテキスト</p>
            <p className={styles.line2}>テキストテキストテキストテキストテキスト</p>
            <p>テキストテキストテキストテキストテキスト</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
