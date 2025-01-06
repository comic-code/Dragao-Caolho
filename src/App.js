import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import GlobalProvider from './contexts/Global';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';
import Loading from './components/Loading';
import Items from './pages/Items';

const Spells = lazy(() => import('./pages/Spells'));

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <GlobalStyle />
        <Menu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="spells" element={
            <Suspense fallback={<Loading />}>
              <Spells />
            </Suspense>
          } />
        </Routes>
      </div>
    </GlobalProvider>
  );
}
