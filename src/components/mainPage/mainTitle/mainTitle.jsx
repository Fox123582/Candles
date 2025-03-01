import React from "react";
import styles from "./mainTitle.module.css";

const tittle = () => {
  return (
    <div className={styles.container}>
      <img src="src\assets\banner_00000 1.svg" alt="Background" className={styles.image} />
      <div className={styles.overlay}>
        <h2 className={styles.title}> Input your text here </h2>
        <p className={styles.text}>Input secondary text here</p>
      </div>
    </div>
  );
};

export default tittle;

