import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Sobre } from './components/Sobre';
import { NotFound } from './components/NotFound';
import { Header } from './components/Header';
import { Produto } from './components/Produto';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/produto/:id' element={<Produto />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
