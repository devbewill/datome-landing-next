export default function Features() {
  const features = [
    {
      name: "Personalized blockchain",
      description:
        "Datome empowers you to create a personalized blockchain process tailored to your specific business needs.",
      image: "1.png",
    },
    {
      name: "Process optimization",
      description:
        "Datome reduces errors and redundancies,  leading to increased productivity and cost savings.",
      image: "2.png",
    },
    {
      name: "Stakeholder coordination",
      description:
        "Datome  harmonizes stakeholder'scontributions to enhance collaboration and operational efficiency.",
      image: "3.png",
    },
    {
      name: "Compliance assurance",
      description:
        "Datome minimizes the risk of legal disputes and ensuring that your operations meet all requirements.",
      image: "4.png",
    },
    // {
    //   name: "Data-driven decision making",
    //   description:
    //     "Datome ensures that you can trust your data, enabling confident, data-driven choices.",
    //   image: "5.png",
    // },
  ];

  return (
    <section className="features">
      <div className="mx-auto max-w-7xl py-10 px-6 ">
        {/* <h2 className="text-sm font-semibold text-primary uppercase">
          Features
        </h2> */}
        <h2 className="mt-2 text-xl lg:text-2xl md:mb-8">
          Some things Datome can do for you
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-2 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-start text-center bg-secondary p-4 rounded-md"
            >
              <img
                alt={item.name}
                src={`./features/${item.image}`}
                className=" w-24 pt-6 pb-10 mx-auto"
              />
              <div>
                <h3 className="text-xl">{item.name}</h3>

                <p className="py-3 text-base ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
