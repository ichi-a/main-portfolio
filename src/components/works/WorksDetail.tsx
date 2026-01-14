import { motion } from "motion/react";
import { Work } from "@/types/workType";
import styles from "./WorksDetail.module.css";
import { useEffect } from "react";

type Props = {
  item: Work;
  onClose: () => void;
};

const WorksDetail = ({ item, onClose }: Props) => {
  useEffect(() => {
    const scroll = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = scroll
    }
  },[])



  return (

    // overlay
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={onClose} >

      {/* card枠 */}
      <motion.div
        layoutId={`card-${item.id}`}
        className={styles.detailCard}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}>

          {/* imageArea > image */}
          <motion.div layoutId={`wrap-${item.id}`}>
            <div className={styles.imageWrap}>
              <img className={styles.image}
              src={item.image} alt={item.title} />
            </div>
          </motion.div>

          {/* textArea > tech + title + description + link */}
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, delay: 0.2}} className={styles.textArea}>
            <div className={styles.techArea}>
              {item.techs?.map(tech => (
              <div className={styles.techWrap} key={tech.names}>
                <img className={styles.techLogo} src={tech.icon} alt="" />
                <span>{tech.names}</span>
              </div>
              ))}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>

            <div className={styles.links}>
              <div>
                <img src="logos/github.svg" alt="" className={styles.logo}/>
                <a className={styles.github} href={item.github} target="_blank" rel="noopener noreferrer">github</a>
              </div>
              <div>
                <img src="logos/vercel.svg" alt="" className={styles.logo}/>
                <a className={styles.vercel} href={item.vercel} target="_blank" rel=" noopener noreferrer">vercel</a>
              </div>
            </div>
            <button onClick={onClose} className={styles.closeBtn}>close</button>
          </motion.div>



      </motion.div>
    </motion.div>
  );
};

export default WorksDetail;
