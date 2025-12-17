import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import LoginForm from './components/LoginForm'
import ProductList from './components/ProductList.jsx'
import Header from './components/Header.jsx'
import Items from './components/Items.jsx'
import AddProduct from './components/AddProduct.jsx'
import Cart from './components/Cart.jsx'
import Orders from './components/Orders.jsx'
import AdminPage from './components/AdminPage.jsx'
import Hero from './components/Hero.jsx'
import { CartProvider } from './components/CartContext.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

/*
Previous App implementation (kept as a comment):

import StudentCard from './components/StudentCard'
import Counter from './components/Counter'
import UserDetails from './components/UserDetails'
import Pagination from './components/Pagination'
import { GlobalProvider } from "./context/GlobalContext.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState(() => {
    const page = sessionStorage.getItem("page");
    return page ? parseInt(page) : 1;
  })

  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <>
        <Header onCartClick={() => setShowCart(!showCart)} showCart={showCart} />
        {showCart ? (
          <Cart />
        ) : (
          <>
            <Items />
            <AddProduct />
          </>
        )}
      </>
    </CartProvider>
   )
}
export default App;

End of previous implementation.
*/

// New Router-based App per E-commerce Task image
const App = () => {
  const [showCart, setShowCart] = useState(false)

  // simple guard components using sessionStorage per task requirements
  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    return isLoggedIn ? children : <Navigate to="/login" replace />
  }

  const AdminRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    const role = localStorage.getItem('role')
    return isLoggedIn && role === 'admin' ? children : <Navigate to="/" replace />
  }

  return (
    <CartProvider>
      <GlobalProvider>
        <Router>
          <Header onCartClick={() => setShowCart(!showCart)} showCart={showCart} />

          {showCart && <Cart />}

          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Hero />
                  <Items />
                  <ProductList />
                  <Footer />
                </>
              )}
            />

            <Route path="/products" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/login" element={<LoginForm />} />

            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />

            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPage />
                </AdminRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </Router>
      </GlobalProvider>
    </CartProvider>

  )
}

export default App
