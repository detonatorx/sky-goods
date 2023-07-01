import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import Layout from './components/layout/Layout';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
