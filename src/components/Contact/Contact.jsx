import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to Meet!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:kunamallarahul50@gmail.com">rahulkunamalla50@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="">Contact No: 9000816049</a>
        </li>
      </ul>
    </footer>
  );
};
