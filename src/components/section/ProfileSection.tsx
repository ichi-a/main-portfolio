
import styles from "./ProfileSection.module.css"


const ProfileSection = () => {
  return (
    <section className={styles.section} id="profile-section">
      <h1 className={styles.h1}>Profile</h1>
      <div className={styles.profImg}>
        <img className={styles.img} src="/logos/github.svg" alt=""/>
        <p className={styles.p}>Shouhei Noichi</p>
      </div>
      <div className={styles.textWrap}>
        <div>
          <p >テキストテキストテキストテキストテキスト</p>
          <p className={styles.line2}>テキストテキストテキストテキストテキスト</p>
          <p className={styles.line3}>テキストテキストテキストテキストテキスト</p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
