import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import "@egjs/react-flicking/dist/flicking.css";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { AutoPlay, Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

const industries = [
  {
    name: "Supply Chain Tracking",
    description:
      "Monitor each stage of your product's life cycle, from manufacturing to distribution, ensuring full transparency and compliance.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Intellectual Property Management",
    description:
      "Secure, trace, and verify the use of copyrighted materials or patented inventions, ensuring legal compliance and protecting against infringement.",
    icon: LockClosedIcon,
  },
  {
    name: "Financial Audits",
    description:
      "Streamline the audit process by securely and efficiently managing all financial records, transactions, and reports in one centralized model.",
    icon: ArrowPathIcon,
  },
  {
    name: "Real Estate Asset Management",
    description:
      "Keep track of property details, tenant information, and maintenance schedules, all while ensuring document authenticity.",
    icon: FingerPrintIcon,
  },
  {
    name: "Customer Relationship Management",
    description:
      "Customize your CRM model to track sales pipelines, support tickets, boosting customer satisfaction and retention.",
    icon: ArrowPathIcon,
  },
  {
    name: "Quality Assurance in Manufacturing",
    description:
      "Easily monitor production quality, manage certificates, and track changes, all in real-time to meet industry standards and regulations.",
    icon: FingerPrintIcon,
  },
];
export default function Context() {
  const _plugins = [
    new Pagination({
      type: "bullet",
      classPrefix: "bulletCustom",
    }),
    new AutoPlay({ stopOnHover: true }),
  ];

  return (
    <section className="industries">
      <div className="overflow-hidden bg-secondary py-20">
        <div className=" lg:pl-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className=" mx-auto px-6 lg:pr-8 lg:max-w-xl lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-sm font-semibold text-primary uppercase">
                  Industries
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Datome in the Real World
                </p>
                <p className="mt-4 text-gray-600">
                  From healthcare to logistics, Datome has enabled businesses to
                  transition from outdated, compliance-risky operations to
                  transparent, fully-compliant data management systems.
                </p>
              </div>
            </div>
            <Flicking
              align="prev"
              circular={false}
              style={{ paddingLeft: "1.5rem", paddingBottom: "3rem" }}
              plugins={_plugins}
            >
              {industries.map((industry) => (
                <div
                  key={industry.name}
                  className="panel relative mx-3 w-72 lg:w-80 rounded-xl bg-black  p-6 shadow-sm "
                >
                  <dt className="font-semibold leading-7 text-gray-900">
                    <div className="flex h-15 w-15">
                      <industry.icon className="h-10 w-10" aria-hidden="true" />
                    </div>
                    <p className="text-white mt-3 text-xl">{industry.name}</p>
                  </dt>
                  <dd className="mt-2 mb-6 text-gray-100">
                    {industry.description}
                  </dd>
                  <a
                    href="#"
                    className="absolute bottom-4 text-white font-bold leading-6 "
                  >
                    See more <span aria-hidden="true">→</span>
                  </a>
                </div>
              ))}
              <ViewportSlot>
                <div className="flicking-pagination"></div>
              </ViewportSlot>
            </Flicking>
          </div>
        </div>
      </div>
    </section>
  );
}
