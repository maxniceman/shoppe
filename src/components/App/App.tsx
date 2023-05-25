import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
