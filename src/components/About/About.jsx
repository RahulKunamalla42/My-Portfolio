import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.myimage} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications :</h3>
              <p>
                <ul>
                  <li>Python data science basic to advance</li>
                  <li>Java basics from hacker rank</li>
                  <li>Python basics from hacker rank</li>
                  <li>Java Dsa from coursera</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Key Strenths :</h3>
              <p>
                <ul>
                  <li>Self Motivated</li>
                  <li>Quick Learner</li>
                  <li>Time Mangement</li>
                </ul>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Personal Information :</h3>
              <p>
                <ul>
                  <li><span>Full Name :</span> Rahul Kunamalla</li>
                  <li><span>DOB :</span>05.06.2002</li>
                  <li><span>Address :</span>2-14/1,Kothagattu,Shankaraptnam,
                  Karimnager,Telangana 505490.</li>
                </ul>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
