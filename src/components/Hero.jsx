const Hero = () => {
  return(
    <section className="min-h-[90vh] grid grid-cols-10">
      <div className="col-span-5 ml-24 mt-24 justify-center">
        <img src="Scarecrow.png" className="w-3/4" />
      </div>
      <div className="col-span-5 py-24">
        <div>
          <h1 className="text-[64px] font-mono font-bold tracking-normal leading-tight">I have bad news <br/>for you</h1>
        </div>
        <div className="w-72 text-[24px] mt-4 tracking-wide">
          <h3>The page you are looking for might be removed or is temporarily unavailable</h3>
        </div>
        <div className="mt-6">
          <button className="uppercase bg-gray-800 p-4 text-white font-semibold">Back to Homepage</button>
        </div>
      </div>
    </section>
  )
}

export default Hero