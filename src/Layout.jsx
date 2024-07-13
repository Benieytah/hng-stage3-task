import { Outlet } from 'react-router-dom';
import { ErrorToast, Toast, Footer, Modal, Navbar } from './components';
import { useAppContext } from './context/AppContext';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
  const { showToast, showModal, showErrToast } = useAppContext();
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <AnimatePresence>
        {showToast && <Toast />}
        {showErrToast && <ErrorToast />}
        {showModal && <Modal />}
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default Layout;