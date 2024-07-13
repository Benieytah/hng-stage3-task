import { Routes, Route, Link } from "react-router-dom";
import { Cart, Checkout, Home, SingleProduct } from "./pages";
import Layout from "./Layout";
import { useAppContext } from "./context/AppContext";
import { Loader } from "./components";

const App = () => {
  const { isLoading } = useAppContext();

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="products/:productSlug" element={<SingleProduct />} />
      </Route>
    </Routes>
  )
}

export default App