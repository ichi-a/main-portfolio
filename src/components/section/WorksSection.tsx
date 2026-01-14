"use client";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import WorksGrid from "../works/WorksGrid";
import WorksDetail from "../works/WorksDetail";
import styles from "./WorksSection.module.css";
import { worksData } from "@/data/worksData";

const WorksSection = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedItem = worksData.find((item) => item.id === selectedId);

  return (
    <section className={styles.section} id="works-section">
      <div className={styles.sectionTitle}>
        <h2 className={styles.h2}>Works</h2>
      </div>

      <div className={styles.container}>
        <WorksGrid
          data={worksData}
          selectedId={selectedId}
          onSelect={(id) => setSelectedId(id)}
        />
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <WorksDetail item={selectedItem} onClose={() => setSelectedId(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorksSection;
