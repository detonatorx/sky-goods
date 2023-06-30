import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        Swit
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
