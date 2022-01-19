// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductInfo from './pages/ProductInfo';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './stylesheets/layout.css'
import './stylesheets/products.css'
import './stylesheets/authentication.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
       <ToastContainer />
        
        <BrowserRouter>
          <Routes>

                {/* <Route path='/' exact element={<HomePage />} /> */}
                <Route path='/login' exact element={<LoginPage />} />
                <Route path='/register' exact element={<RegisterPage />} />
                {/* <Route path='/productinfo/:productid' exact element={<ProductInfo />} /> */}
                {/* <Route path='/cart' exact element={<CartPage />} /> */}

                <Route path='/' exact element={<ProtectedRoutes> <HomePage /> </ProtectedRoutes>} />
                <Route path='/productinfo/:productid' exact element={<ProtectedRoutes> <ProductInfo /> </ProtectedRoutes>} />
                <Route path='/cart' exact element={<ProtectedRoutes> <CartPage /> </ProtectedRoutes>} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoutes = ({ Children }) => {
  if (localStorage.getItem('currentUser')) {
    return Children
  } else {
    return <Navigate to='/login' />
  }
};
