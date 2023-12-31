export default function Hero() {
  return (
    <section className="hero overflow-hidden pb-10 md:min-h-[95vh] ">
      <div className="">
        <div className="relative px-6 pt-14 lg:px-8">
          <div className="shape rotate-[55deg] absolute top-20 -right-72 lg:top-52 lg:right-[8vw] rounded-3xl bg-primary  w-96 h-96"></div>

          <img
            alt="hero-block"
            src="hero-block.png"
            className="hidden lg:block absolute w-[35vw] h-[35vw] top-36 right-16 object-contain"
          />

          <div className="relative pt-20 lg:mt-5">
            <div className="max-w-7xl z-1 mx-auto mt-5 lg:mt-20">
              <h2 className="text-sm font-semibold leading-7 text-primary uppercase"></h2>
              <h1 className="text-4xl font-bold lg:font-semibold tracking-tight   lg:text-[7rem] lg:leading-none ">
                Complex processes made easy
              </h1>
              <p className="mt-5 lg:text-2xl leading-6 max-w-3xl text-gray-700 ">
                Set a standard among your stakeholders, orchestrate processes,
                and ensure compliance. All in one place with your own
                blockchain.
              </p>
              <div className="flex-col mt-16 flex items-center  gap-6 lg:flex-row">
                <a href="#start-trial" className="btn  bg-black text-white">
                  Try now for free
                </a>
                <a
                  href="#book-a-demo"
                  className="text-md font-semibold leading-6 hover:text-primary transition"
                >
                  <span aria-hidden="true">Book a demo →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
