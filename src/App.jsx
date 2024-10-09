import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Layout } from './components/Layout/Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage.jsx'));

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
