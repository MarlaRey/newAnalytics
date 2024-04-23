import { RouterProvider } from 'react-router-dom';
import {routes} from '../src/routes/routes';
import './App.scss'


function App() {
  return <RouterProvider router={routes}/>
  
}

export default App
