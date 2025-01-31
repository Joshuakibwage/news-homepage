 import { navLinks } from "../constants"
 import { useState } from "react"


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="w-full">

      {/* Desktop navbar */}
      <div className="w-3/4 flex justify-between mx-auto mt-10">

        <div>
          <h1>W</h1>
        </div>
        {/* I map through navlinks located in the constants/index.js file to display them on the navbar */}
        <div className="gap-8 flex ">
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
      </div>
      {/* Mobile navbar */}
      

    </nav>
  )
}

export default Navbar