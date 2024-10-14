import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { Layout } from './components/Layout/Layout.jsx';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/Catalog/Catalog.jsx'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage.jsx'));
const CamperFeatures = lazy(() =>
  import('./components/CamperFeatures/CamperFeatures.jsx')
);
const CamperReview = lazy(() =>
  import('./components/CamperReview/CamperReview.jsx')
);

function App() {
  return (
    <>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReview />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
