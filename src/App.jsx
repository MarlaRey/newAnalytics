import { RouterProvider } from 'react-router-dom';
import {routes} from '../src/routes/routes';
import './App.scss'
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("your GA measurement id");
  return <RouterProvider router={routes}/>
  
}

export default App
