"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const services = [
  {
    title: "Método Russo",
    description:
      "Extensão de cílios com o efeito volumoso, ideal para quem deseja um olhar mais dramático e impactante. Com a técnica de volume 3D a 6D, é possível criar cílios mais densos e volumosos.",
    duration: "2h",
    price: "$120",
  },
  {
    title: "Método Brasileiro",
    description:
      "Método de extensão de cílios que oferece um efeito mais natural, mas com volume e curvatura personalizados para cada cliente. Ideal para quem deseja um olhar mais suave, mas com definição.",
    duration: "1h 30min",
    price: "$100",
  },
  {
    title: "Método Clássico",
    description:
      "Extensão de cílios individual com um fio de extensão aplicado em cada cílio natural. Ideal para quem busca um look mais sutil e alongado, mas com maior definição.",
    duration: "1h 30min",
    price: "$80",
  },
  {
    title: "Refil de Cílios",
    description:
      "Serviço de manutenção para retoque da extensão de cílios, ideal para quem já realizou o procedimento anteriormente e precisa manter o volume e o formato.",
    duration: "1h",
    price: "$70",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">
          Serviços de Extensão de Cílios
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-xl my-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm select-none">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="text-sm font-semibold">{item.price}</div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            title="Deslizar para a esquerda"
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            title="Deslizar para a direita"
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
