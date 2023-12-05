import Header from "./pages/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/products/Products.tsx";
import Home from "./pages/home/Home.tsx";
import About from "./pages/about/About.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import Cart from "./pages/cart/Cart.tsx";
import {CartProvider} from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/products'} element={<Products/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contacts'} element={<Contacts/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
