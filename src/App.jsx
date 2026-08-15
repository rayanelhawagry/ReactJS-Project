import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
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

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} /> },
        { path: 'about', element: <About currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} /> },
        { path: 'portfolio', element: <Portfolio currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} /> },
        { path: 'contact', element: <Contact currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} /> },
        { path: '*', element: <NotFound currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} /> }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Main currentTitle={currentTitle} setCurrentTitle={setCurrentTitle} />
    </>
  )
}

export default App
