import Image from "next/image";
import olho from "../../../public/olho.png";
import mylash from "../../../public/mylash.webp";

export function Hero() {
  return (
    <section className="bg-white-100 text-black-800 relative overflow-hidden">
      {/* Imagem de fundo (olho) */}
      <div className="relative w-full h-[400px]">
        <Image
          src={olho}
          alt="olho"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-90"
        />
        {/* Camada preta semi-transparente no mobile */}
        <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
      </div>

      {/* Container principal */}
      <div className="container mx-auto pt-20 pb-16 md:pb-0 px-5 relative">
        {/* Grid para organizar texto e imagem */}
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Texto principal */}
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl leading-10"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Lash Perfection!
            </h1>
            <p
              className="lg:text-lg"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Realce sua beleza natural com um toque de elegância. <br />
              Na MyLASH, cada extensão de cílios é feita com delicadeza e
              atenção a cada detalhe. <br />
              Seu olhar merece ser inesquecível. 🤍
            </p>

            {/* Botão de agendamento */}
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <a
                href="https://wa.me/5511984282343?text=Olá%2C%20gostaria%20de%20agendar%20meu%20horário."
                className="bg-green-600 font-semibold px-4 py-2 rounded-3xl text-white flex items-center justify-center w-fit gap-2 transition duration-300 ease-in-out hover:shadow-[0_0_12px_rgba(255,255,255,0.5)] hover:scale-105"
              >
                WhatsApp
              </a>
              <p className="py-2 text-gray-500 gap-2">Agende seu Horário</p>
            </div>
          </div>

          {/* Imagem da MyLASH */}
          <div
            className="hidden md:block h-full relative"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <Image
              src={mylash}
              alt="mylash"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              className="object-contain"
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
