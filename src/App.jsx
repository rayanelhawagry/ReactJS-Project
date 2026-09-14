import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import Main from './main'

function App() {
  const [currentTitle, setCurrentTitle] = useState('')

  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home setCurrentTitle={setCurrentTitle} /> },
        { path: 'about', element: <About setCurrentTitle={setCurrentTitle} /> },
        { path: 'portfolio', element: <Portfolio setCurrentTitle={setCurrentTitle} /> },
        { path: 'contact', element: <Contact setCurrentTitle={setCurrentTitle} /> },
        { path: '*', element: <NotFound setCurrentTitle={setCurrentTitle} /> }
      ]
    }
  ], { basename: '/ReactJS-Project' })


  return (
    <>
      <RouterProvider router={router} />
      <Main currentTitle={currentTitle} />
    </>
  )
}

export default App
