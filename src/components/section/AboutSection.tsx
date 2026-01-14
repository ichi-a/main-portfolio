
import SkillsCard from "../skills/SkillsCard"
import Styles from "./AboutSection.module.css"


const AboutSection = () => {
  return (
    <section id="about-section" className={Styles.section}>
      <div className={Styles.sectionTitle}>
        <h2 className={Styles.h2}>About</h2>
        <h3 className={Styles.h3}>Skills</h3>
      </div>
      <div className={Styles.container}>
          <SkillsCard />
        </div>
    </section>
  );
}

export default AboutSection;
