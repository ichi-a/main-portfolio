import { motion } from "motion/react";
import { Work } from "@/types/workType";
import styles from "./WorkGrid.module.css";

type Props = {
  data: Work[];
  onSelect: (id: string) => void;
  selectedId: string | null;
};

const WorksGrid = ({ data, onSelect, selectedId }: Props) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <motion.div
          key={item.id}
          layoutId={`card-${item.id}`}
          onClick={() => onSelect(item.id)}
          className={styles.card}
          style={{ opacity: selectedId === item.id ? 0 : 1 }}
          layout>
            <motion.div className={styles.imgWrap} layoutID={`wrap-${item.id}`}>
              <img className={styles.image}
              src={item.image} alt={item.title} />
          </motion.div>
          <h3 className={styles.title}>{item.title}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default WorksGrid;
