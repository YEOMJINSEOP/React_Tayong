import styles from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <p>Error Page🐶</p>
  },
  {
    path: "/list/*",
    element: <List/>,
    errorElement: <p>Error Page🐶: list</p>
  }
])

function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
