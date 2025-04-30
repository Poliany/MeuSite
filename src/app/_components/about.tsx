"use client";

import Image from "next/image";
import freepik from "../../../public/freepik.png";
import { Check } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function About() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const sliderImages = ["/freepik.png", "/fio.jpg", "/mega.jpg", "/egi.jpg"]; // Exemplo, troque pelas suas imagens

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Slide e imagem extra */}
        <div className="relative space-y-6">
          {/* Slide */}
          <div
            ref={sliderRef}
            className="keen-slider relative w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer duration-300 hover:scale-110"
          >
            {sliderImages.map((src, index) => (
              <div className="keen-slider__slide relative" key={index}>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Imagem pequena sobreposta */}
          <div className="absolute w-40 h-40 right-8 -bottom-10 border-4 border-yellow-600 rounded-3xl overflow-hidden">
            <Image
              src={freepik}
              alt="Freepik"
              quality={100}
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Conteúdo ao lado */}
        <div className="space-y-4 mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold">CUIDADOS</h1>
          <p>
            Ao optar pela extensão de cílios, você investe não apenas na beleza
            do seu olhar, mas também na saúde dos seus cílios naturais. Seguir
            as orientações de pré e pós-procedimento é essencial para garantir a
            durabilidade das extensões, evitar irritações e manter um resultado
            bonito e seguro. Cuidar dos cílios antes da aplicação prepara a base
            perfeita para a fixação dos fios, enquanto o cuidado após o
            procedimento prolonga a vida útil das extensões e preserva seus
            cílios naturais. Dedicar atenção a esses pequenos detalhes faz toda
            a diferença na qualidade do seu resultado final.
          </p>

          <p className="font-bold">Pré-Extensão</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Cílios totalmente limpos, sem maquiagem ou cremes.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Evite usar curvex ou máscara de cílios no dia da aplicação.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Higienize seus cílios com um shampoo apropriado no dia anterior.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Evite consumir café ou estimulantes antes do procedimento.
            </li>
          </ul>

          <p className="font-bold">Pós-Extensão</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Não frequente saunas ou ambientes com vapor nos primeiros dias.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Evite esfregar os olhos ou puxar as extensões.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Não use máscara de cílios.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Higienize suavemente os cílios diariamente com produtos adequados.
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-pink-600" />
              Faça manutenções periódicas a cada 2-3 semanas.
            </li>
          </ul>
        </div>
      </div>

     
    </section>
  );
}