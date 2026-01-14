
import { skillsData } from "@/data/skillsData";
import { Skill } from "@/types/skillType";
import Styles from "./SkillsCard.module.css"

const SkillsCard = () => {
  return (
  <div className={Styles.grid}>
    {skillsData.map((skill:Skill) => (
      <div key={skill.id} className={Styles.card}>
        <img src={skill.image} alt="logo" className={Styles.logo} />
        <p className={Styles.skillName}>{skill.title}</p>
      </div>
    ))}
  </div>
  );
}

export default SkillsCard;
