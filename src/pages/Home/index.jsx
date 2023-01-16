import About from "../../components/HomePage/About";
import Footer from "../../components/HomePage/Footer";
import Form from "../../components/HomePage/Form";
import Header from "../../components/HomePage/Header";
import Plans from "../../components/HomePage/Plans";
import styles from "../../styles/HomePage/Home.module.scss";

function HomePage() {
  return (
    <div>
      <Header />
      <h1 className={styles.header}>
        Find the perfect plan for your business.
      </h1>
      <Plans />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default HomePage;
