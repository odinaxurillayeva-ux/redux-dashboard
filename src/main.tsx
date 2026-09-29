import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/globals.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import Customers from './pages/Customers.tsx';
import OrderManagement from './pages/OrderManagement.tsx';
import Categories from './pages/Categories.tsx';
import Products from './pages/Products.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import Login from './pages/Login.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      >
      <Route index element={<Dashboard />} />
      <Route path='customers' element={<Customers />} />
      <Route path='orders' element={<OrderManagement />} />
      <Route path='categories' element={<Categories />} />
      <Route path='products' element={<Products />} />
</Route>
    </Routes>
  </BrowserRouter>
)
