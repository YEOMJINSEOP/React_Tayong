import styles from './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

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
    path: "/create/*",
    element: <Create/>,
    errorElement: <p>Error Page🐶: create</p>
  }
  ,
  {
    path: "/detail/*",
    element: <Detail/>,
    errorElement: <p>Error Page🐶: detail</p>
  },
  {
    path: "/login/*",
    element: <Login/>,
    errorElement: <p>Error Page🐶: login</p>
  },
  {
    path: "/signup/*",
    element: <SignUp/>,
    errorElement:  <p>Error Page🐶: signUp</p>
  }
])

function App() {


  return (
    <RouterProvider router={router}/>
  );
}

export default App;
