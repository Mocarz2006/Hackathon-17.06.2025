import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);












// import { createRoot } from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
// import App from './App'
// import MainPage from './MainPage'
// import Dashboard from './Dashboard'
// import AddNote from './AddNote'
// import { StrictMode } from 'react'

// const router = createBrowserRouter([
//   {path: "/", element: <App/>},
//   {path: "/dashboard", element: <Dashboard/>},
//   {path: "/addnote", element: <AddNote/>},
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//   <RouterProvider router={router}/>
//   </StrictMode>
// )