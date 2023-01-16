import styles from "../../styles/HomePage/HomeComponent.module.scss";
import { PlanData } from "../dummyData";

function Plans() {
  return (
    <div className={styles.plan_root}>
      {PlanData &&
        PlanData.length &&
        PlanData.map((plan, index) => (
          <div className={index === PlanData.length - 1 ? styles.selectedColor : styles.whiteColor}>
            <p style={{color: '#908e8e'}}>{plan.plan}</p>
            <h2>
              {plan.amount}
              <sub>{`${plan.durantion ? ` /${plan.durantion}` : ""}`}</sub>
            </h2>
            <p>Ut end ad bfytfuy hugyf uyafytf iuu haui iuhyaiu ihaui sit.</p>
            <ul>
              <li>ghgk ji hsyu sihsiu</li>
              <li>usguys hsiusn osjosj </li>
              <li>iusugs usygfs tyfty</li>
            </ul>
            <button>{plan.btnText}</button>
          </div>
        ))}
    </div>
  );
}

export default Plans;
