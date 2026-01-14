"use client"
import { skillsData } from "@/data/skillsData";
import { Skill } from "@/types/skillType";
import Styles from "./SkillsCard.module.css"
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const variants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: .9,
      staggerChildren:.05
    }
  }
};

const itemVariants: Variants = {
  hidden: {opacity:0, x: -6, y: -6, filter: "blur(8px)"},
  show: {
    opacity: 1 ,x: 0, y: 0, filter: "blur(0px)",
    transition: {
      duration: .45,
      ease: "easeOut"
    }
  }
};

const SkillsCard = () => {
  return (
  <motion.div className={Styles.grid}
  variants={variants}
  initial="hidden"
  whileInView="show"
  viewpoint={{ once: true, amount: 0.5 }}
  >
    {skillsData.map((skill:Skill) => (
      <motion.div key={skill.id} className={Styles.card}
      variants={itemVariants}>
        <img src={skill.image} alt="logo" className={Styles.logo} />
        <p className={Styles.skillName}>{skill.title}</p>
      </motion.div>
    ))}
  </motion.div>
  );
}

export default SkillsCard;
