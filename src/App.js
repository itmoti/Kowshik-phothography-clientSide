import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './Router/Routers';

function App() {
  return (
    <div className="container mx-auto">
       <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
