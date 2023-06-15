const Hero = () => {
  return(
    <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-10">
      <div className="md:col-span-5 md:ml-24 mt-24 justify-center">
        <img src="Scarecrow.png" className="md:w-3/4" />
      </div>
      <div className="md:col-span-5 md:py-24 py-4 md:pl-0 px-4">
        <div>
          <h1 className="md:text-[64px] text-[48px] font-mono font-bold tracking-normal leading-tight">I have bad news for you</h1>
        </div>
        <div className="w-72 text-[24px] md:mt-4 tracking-wide">
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