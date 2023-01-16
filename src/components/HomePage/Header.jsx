import CurtainsClosedIcon from "@mui/icons-material/CurtainsClosed";
import styles from "../../styles/HomePage/HomeComponent.module.scss";
import HamburgerHome from "./HamburgerHome";

function Header() {
  const labels = ["Home", "Pricing", "About"];
  return (
    <div className={styles.header_root}>
      <div>
        <p className={styles.logo}>
          <CurtainsClosedIcon /> Opalin
        </p>
        {labels.map((c) => (
          <p className={`${styles.label} ${styles.hideSm}`}>{c}</p>
        ))}
      </div>
      <div className={styles.hideSm}>
        <p className={styles.label}>Login</p>
        <p className={styles.label}>Sign Up</p>
      </div>
      <HamburgerHome menuList={[...labels, "Login", "Sign Up"]} />
    </div>
  );
}

export default Header;
