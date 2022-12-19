import styles from './App.module.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import LocationSelector from './components/locationSelector/locationSelector';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <p>Error Page🐶</p>
  },
])

function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
