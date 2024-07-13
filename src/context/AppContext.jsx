import { createContext, useContext, useState, useEffect } from 'react';
// import { products } from '../constants/data';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../lib/api';


const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrToast, setshowErrToast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allproducts = await fetchProducts();
        setProducts(allproducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  const addItemToCart = (id, quantity) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.product.id === id);

      if (itemInCart) {
        return prevCart.map((item) =>
          item.product.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        const product = products?.items?.find((p) => p.id === id);
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const incrementCart = () => {
    setCartItems(cartItems + 1);
  };

  const decrementCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  useEffect(() => {
    if (showErrToast) {
      const timer = setTimeout(() => {
        setshowErrToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showErrToast]);
  
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
        navigate('/');
        document.body.style.overflow = "hidden";
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item?.product?.current_price[0]?.USD?.[0] * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        incrementCart,
        decrementCart,
        showToast,
        setShowToast,
        addItemToCart,
        cart,
        setCart,
        totalPrice,
        setShowModal,
        showModal,
        showErrToast,
        setshowErrToast,
        products,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
