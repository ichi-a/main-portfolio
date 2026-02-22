
import styles from "./ProfileSection.module.css"
import Image from "next/image";
import me from "@/assets/img/me.jpg";

const ProfileSection = () => {
  return (
    <section className={styles.section} id="profile-section">
      <div className={styles.titleWrap}>
        <h1 className={styles.h1}>Profile</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.profCenter}>
          <div className={styles.imgwrap}>
            <Image src={me} alt="顔写真" className={styles.img} priority/>
          </div>
          <p className={styles.p}>Shouhei Noichi</p>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.textWrap}>
            <p className={styles.line1}>大阪府池田市在住　前職は電気工事など</p>
            <p className={styles.line2}>直感で操作でき、UXを損なわない設計</p>
            <p className={styles.line3}>全てに理由がある設計を心がけています</p>
            <p className={styles.line4}>掲載しているアプリをぜひ見てください！</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
