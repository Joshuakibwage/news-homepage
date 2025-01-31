 import { navLinks } from "../constants"
 import { useState } from "react"
 import logo from "../assets/images/logo.svg"
 import hamburger from "../assets/images/icon-menu.svg"
 import close from "../assets/images/icon-menu-close.svg"


const Navbar = () => {
  // state responsible for handling navbar
  const [nav, setNav] = useState(false);
  // function to toggle between mobile menu and hamburger menu
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full">

      {/* Desktop navbar */}
      <div className="w-3/4 flex justify-between items-center mx-auto mt-10">

        <div>
          <img src={logo} alt="" />
        </div>
        {/* I map through navLinks located in the constants/index.js file to display them on the navbar */}
        <div className="gap-8 md:flex hidden">
          {navLinks.map((link) => (
            <ul key={link.href}>
              <li 
                className="text-slate-700"
              >
                {link.label}
              </li>
            </ul>
          ))}
        </div>
          {/* hamburger menu and close menu for mobile devices */}
          <button onClick={toggleNav} className="md:hidden block absolute right-8 z-3">
            {nav ? 
              (<img src={close}/>) 
              : (<img src={hamburger} className="h-6"/>)}
          </button>

      </div>
      {/* Mobile navbar */}

      {nav ? (
        
        <div className="flex flex-col md:hidden absolute top-0 pt-40 right-0 w-1/2 h-screen bg-offwhite z-2">
          {navLinks.map((link) => (
            <ul key={link.href} className="mt-5">
              <li 
                className="text-slate-700 ml-8 text-xl font-bold"
              >
                {link.label}
              </li>
            </ul>
          ))}
        </div>
      ) : (null)}


    </nav>
  )
}

export default Navbar