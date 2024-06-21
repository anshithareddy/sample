
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Users from './components/users/Users';
import Adduser from './components/adduser/Adduser';
import Removeusers from './components/removeusers/Removeusers'
function App() {
  const router=createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Adduser/>
      },
      {
        path:"/users",
        element:<Users/>
      },
      
      {
        path:"/removeusers",
        element:<Removeusers/>
      }
    ]

  }])


  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
