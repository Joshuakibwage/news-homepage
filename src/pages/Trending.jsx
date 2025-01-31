 import heroDesktopBg from "../assets/images/image-web-3-desktop.jpg"
import Button from "../components/Button"
import heroMobileBg from "../assets/images/image-web-3-mobile.jpg"

const Trending = () => {
  return (
    <section className="w-3/4 mx-auto mt-8">

      <div className="w-full grid  md:grid-cols-3 md:gid-rows-2 gap-6">

        <div className="w-full md:col-span-2">
          <img 
            src={heroDesktopBg}
            className="w-full hidden md:block flex-0"
            alt="Hero background" 
          />

          <img 
            src={heroMobileBg} 
            alt="mobile background" 
            className="w-full md:hidden"
          />
        </div>

        <div className=" row-span-2 bg-slate-950">
          <h1 className="font-bold text-3xl text-yellow-500 ml-4 mt-6">New</h1>

          <div className="ml-4 mt-4">
            <h2 className="text-amber-50 font-extrabold">Hydrogen vs Electric Cars</h2>
            <p className="text-amber-50 text-xs mt-2">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div 
            className="border border-b shadow-xs shadow-neutral-300 w-[90%] mx-auto mt-6 h-0.5"
          />

          <div className="ml-4 mt-4">
            <h2 className="text-yellow-500 font-extrabold">The Downsides of AI Artistry</h2>
            <p className="text-amber-50 text-xs mt-2">What are the possible adverse effects of on-demand AI Images generation?</p>
          </div>

          <div 
            className="border border-b shadow-xs shadow-neutral-300 w-[90%] mx-auto mt-6 h-0.5"
          />

          <div className="ml-4 mt-4">
            <h2 className="text-amber-50 font-extrabold">Is VC Funding Drying Up?</h2>
            <p className="text-amber-50 text-xs mt-2">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>

        </div>

        <div className="">
          <h1 
            className="font-extrabold text-5xl"
          >
            The Bright Future of Web 3.0?
          </h1>
        </div>

        <div>
          <p className="text-sm text-gray-400">We dive into the next evolution of the web that claims to put   hte power of the platforms back into the hands of the people. But is it really fulfilling it's promise?
          </p>

          <Button 
            label="READ MORE"
            className="bg-slate-950 px-5 py-2 text-amber-50 mt-6 font-bold hover:bg-red-400 
            transition-transform delay-200 ease-in-out cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full mt-10 mb-10 flex flex-col md:flex-row md:justify-between space-y-8">
        <div className="flex gap-4">

          <img 
            src="src/assets/images/image-retro-pcs.jpg" 
            alt="desktop" 
            className="h-30"
          />
          
          <div>
            <div>
              <h1 className="text-3xl font-bold text-red-500">01</h1>
            </div>
            <h2 className="font-extrabold text-base text-slate-950 mt-1">Reviving Retro PCs</h2>
            <p className="text-xs text-gray-600 mt-2">What happens when old PCs <br /> are given modern upgrades.</p>
          </div>
        </div>

        <div className="flex gap-4">

          <img 
            src="src/assets/images/image-top-laptops.jpg" 
            alt="desktop" 
            className="h-30"
          />

          <div>
            <div>
              <h1 className="text-3xl font-bold text-red-500">02</h1>
            </div>
            <h2 className="font-extrabold text-base text-red-500 mt-1">Top 10 Laptops of 2022</h2>
            <p className="text-xs text-gray-600 mt-2">Our best picks for various <br /> needs and budgets</p>
          </div>
        </div>

        <div className="flex gap-4">

          <img 
            src="src/assets/images/image-gaming-growth.jpg" 
            alt="desktop" 
            className="h-30"
          />

          <div>
            <div>
              <h1 className="text-3xl font-bold text-red-500">03</h1>
            </div>
            <h2 className="font-extrabold text-base text-slate-950 mt-1">The Growth of Gaming</h2>
            <p className="text-xs text-gray-600 mt-2">How the Pandemic has sparked <br /> fresh opportunities</p>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Trending