import { Outlet } from "react-router";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { CartProvider } from "../../pages/CartPage/CartContext";

const Layout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
