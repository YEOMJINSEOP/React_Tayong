import styles from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Create from './pages/Create';

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
  },
  {
    path: "/post/*",
    element: <Create/>,
    errorElement: <p>Error Page🐶: create</p>
  }
  ,
  {
    path: "/detail/*",
    element: <Detail/>,
    errorElement: <p>Error Page🐶: detail</p>
  }
])

function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
