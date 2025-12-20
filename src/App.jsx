import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home/Home"
import Notfound from "./Pages/Notfound/Notfound"
import Movies from "./Pages/Movies/Movies"
import TvShow from "./Pages/TvShow/TvShow"
import People from "./Pages/People/People"
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"





let routes = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "movies", element: <Movies /> },
      { path: "tvshow", element: <TvShow /> },
      { path: "people", element: <People /> },
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
      { path: "*", element: <Notfound /> }
    ]
  }
])


function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
