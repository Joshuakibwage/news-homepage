 import Hero from "../src/pages/Hero"
 import Navbar from "../src/components/Navbar"
 import { createBrowserRouter, RouterProvider } from "react-router-dom"


 const router = createBrowserRouter({
  {
    path: '/',
    element: 
  }
 });
 
 const App = () => {
   return (
     <div className="">
        <Navbar />
        <Hero />
     </div>
   )
 }
 
 export default App