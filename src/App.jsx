import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

const Banner = lazy(() => import('./component/Banner'));
const Header = lazy(() => import('./component/Header'));
const Footer = lazy(() => import('./component/foter'));
const Body = lazy(() => import('./component/Body'));
const About = lazy(() => import('./component/About'));
// const Gallery = lazy(() => import('./component/Gallery'));
const Client = lazy(()=> import ('./component/Clients'))
const GoogleMapEmbed = lazy(() => import('./component/Map'));
const InteractiveJobCard = lazy(() => import('./component/Jobs'));
const Error = lazy(() => import('./component/Error'));
const ServicesInfo = lazy(()=> import('./component/ServicesInfo'));

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
      { path: "/client", element: <Client /> },
      { path: "/contact", element: <GoogleMapEmbed /> },
      { path: "/jobs", element: <InteractiveJobCard /> },
      {path:"/services" ,element:<ServicesInfo/>}
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={app} />
  </StrictMode>
);
