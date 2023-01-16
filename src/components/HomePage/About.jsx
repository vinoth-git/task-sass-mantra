import styles from "../../styles/HomePage/HomeComponent.module.scss";
import { AboutData } from "../dummyData";

function About() {
  return (
    <div className={styles.about_root}>
      {AboutData &&
        AboutData.length &&
        AboutData.map((data) => (
          <div>
            {data.component}
            <p className={styles.about_title}>{data.tite}</p>
            <p className={styles.about_subtitle}>{data.subTitle}</p>
          </div>
        ))}
    </div>
  );
}

export default About;
