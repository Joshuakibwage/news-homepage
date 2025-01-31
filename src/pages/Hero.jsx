 import heroBg from "../assets/images/image-web-3-desktop.jpg"

const Hero = () => {
  return (
    <section className="w-3/4 mx-auto mt-12">

      <div className="w-full grid md:grid-cols-3 md:gid-rows-2 gap-6">

        <div className="w-full col-span-2">
          <img 
            src={heroBg}
            className="w-full"
            alt="" 
          />
        </div>

        <div className="bg-fuchsia-500 row-span-2">

        </div>

        <div className="bg-green-300">
          <h1 
            className="font-extrabold text-5xl"
          >
            The Bright Future of Web 3.0?
          </h1>
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default Hero