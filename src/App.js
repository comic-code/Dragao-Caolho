import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import GlobalProvider from './contexts/Global';
import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';
import Loading from './components/Loading';
import Items from './pages/Items';

const Spells = lazy(() => import('./pages/Spells'));
const SpellDetail = lazy(() => import('./pages/SpellDetail'));
const Characters = lazy(() => import('./pages/Characters'));

function LazyPage({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export default function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <GlobalStyle />
        <Menu />
        <Routes>
          <Route index element={<Home />} />
          <Route path="items" element={<Items />} />
          <Route path="characters" element={<LazyPage><Characters /></LazyPage>} />
          <Route path="spells" element={<LazyPage><Spells /></LazyPage>} />
          <Route path="spells/:spellSlug" element={<LazyPage><SpellDetail /></LazyPage>} />
        </Routes>
      </div>
    </GlobalProvider>
  );
}
