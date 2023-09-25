export default function Context() {
  return (
    <section className="context">
      <div className="overflow-hidden bg-purple-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary uppercase">
                  The context
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  The reliability on your data is a critical issue
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  The door is often left open to potential errors, manipulations
                  and procedural anomalies. A questionable reliability, or an
                  actual wrong processing, may lead to incorrect
                  decision-making, loss of margins or even third-party claims.
                  With usual methods, ensuring trust in your data and processes
                  by all stakeholders is either not possible or complex and
                  expensive.
                </p>
              </div>
            </div>
            <img
              src="./reliability.jpg"
              alt="Product screenshot"
              className="w-full max-w-lg border-4 border-black rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
              width={1280}
              height={832}
            />
          </div>
        </div>
      </div>
    </section>
  );
}