import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const Banner = lazy(() => import('./component/Banner'));
const Header = lazy(() => import('./component/Header'));
const Footer = lazy(() => import('./component/foter'));
const Body = lazy(() => import('./component/Body'));
const About = lazy(() => import('./component/About'));
const Gallery = lazy(() => import('./component/Gallery'));
const GoogleMapEmbed = lazy(() => import('./component/Map'));
const InteractiveJobCard = lazy(() => import('./component/Jobs'));
const Error = lazy(() => import('./component/Error'));

const App = () => {
  return (
    <Suspense >
      <Banner />
      <Header />

      <div className="main-content">
        <Outlet />
      </div>

     
      <Footer />
    </Suspense>
  );
};

const app = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <GoogleMapEmbed /> },
      { path: "/jobs", element: <InteractiveJobCard /> },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={app} />
  </StrictMode>
);
