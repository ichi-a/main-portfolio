import { motion } from "motion/react";
import { Work } from "@/types/workType";
import styles from "./WorksDetail.module.css";
import { useEffect } from "react";
import Image from "next/image";


type Props = {
  item: Work;
  onClose: () => void;
};

const WorksDetail = ({ item, onClose }: Props) => {
  console.log(item)
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
              <Image className={styles.image}
              src={item.image} alt={item.title} placeholder="blur" />
            </div>
          </motion.div>

          {/* textArea > tech + title + description + link */}
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3, delay: 0.2}} className={styles.textArea}>
            {/* 使用技術ロゴ */}
            <div className={styles.techArea}>
              {item.techs?.map(tech => (
              <div className={styles.techWrap} key={tech.names}>
                <img className={styles.techLogo} src={tech.icon} alt="" />
                <span>{tech.names}</span>
              </div>
              ))}
            </div>
            {/* タイトル */}
            <h3 className={styles.title}>{item.title}</h3>
            {/* description */}
            <div className={styles.description}>
            {item.description?.map((content, i) => (
              <div key={i}>
                <h4 className={styles.h4}>{content.heading}</h4>
                <p className={styles.contentBody}>{content.body}</p>
              </div>
            ))}
            </div>
            {/* リンク */}
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
