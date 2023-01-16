import styles from "../../styles/HomePage/HomeComponent.module.scss";

function Footer() {
  return (
    <div className={styles.footer_root}>
      <div>
        <h4>Opalin</h4>
        <p>
          We're a completely remote company, Working across twenty countries
          over 20,000 customers.
        </p>
      </div>
      <div>
        <p className={styles.bold}>Support</p>
        <a href="#">Getting Started</a>
        <a href="#">Resources</a>
        <a href="#">Design</a>
        <a href="#">Tutorials</a>
        <a href="#">Pricing</a>
      </div>
      <div>
        <p className={styles.bold}>Info</p>
        <a href="#">Documentation</a>
        <a href="#">Requirenments</a>
        <a href="#">License</a>
        <a href="#">Updates</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <p className={styles.bold}>Info</p>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Medium</a>
      </div>
    </div>
  );
}

export default Footer;
