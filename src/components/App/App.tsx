import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductList from "../ProductList/ProductList";

import styles from "./App.module.scss";

const products = [
  {
    id: 1,
    name: "Lira Earrings",
    price: "20.00",
    img: "https://fakeimg.pl/380x380?text=image",
  },
  {
    id: 2,
    name: "Hal Earrings",
    price: "25.00",
    img: "https://fakeimg.pl/380x380?text=image",
  },
  {
    id: 3,
    name: "Kaede Hair Pin Set Of 3 ",
    price: "30.00",
    img: "https://fakeimg.pl/380x380?text=image",
  },
];

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}

export default App;
