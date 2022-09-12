import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import GlobalProvider from './contexts/Global';
import Home from './pages/Home';
import Spells from './pages/Spells';
import GlobalStyle from './styles/globalStyles';

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <GlobalStyle />
        <Menu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="spells" element={<Spells />} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}
