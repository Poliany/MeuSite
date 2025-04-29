"use client";

import Image from "next/image";
import freepik from "../../../public/freepik.png";
import { Check } from "lucide-react";
import whatsApp from "../../../public/whatsApp.png";


export function About() {
  return (
    <section className="bg-white-700 py-16">
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {" "}
        {/*essa div esta com as duas fotos dentro*/}
        <div className="relative space-y-6">
          {/*div pai*/}

          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            {" "}
            {/*foto1*/}
            <Image
              src={freepik}
              alt="Freepik"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300"
              priority
            />
          </div>

          <div className="absolute w-40 h-40 right-8 -bottom-10 border-5 border-yellow-600 rounded-3xl overflow-hidden">
            {" "}
            {/*foto2*/}
            <Image
              src={freepik}
              alt="Freepik"
              quality={100}
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="space-y-4">
          {/*Conteudos*/}

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
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Cílios totalmente limpos, sem maquiagem ou cremes.
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Evite usar curvex ou máscara de cílios no dia da aplicação..
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Higienize seus cílios com um shampoo apropriado no dia anterior..
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Evite consumir café ou estimulantes antes do procedimento..
            </li>
          </ul>

          <p className="font-bold">Pós-Extensão</p>

          <ul className="space-y-3">
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Não frequente saunas ou ambientes com vapor nos primeiros dias.
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Evite esfregar os olhos ou puxar as extensões...
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Não use máscara de cílios..
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Higienize suavemente os cílios diariamente com produtos
              adequados..
            </li>
            <li className="flex intems-center gap-2">
              <Check className=" text-pink-600" />
              Faça manutenções periódicas a cada 2-3 semanas..
            </li>
          </ul>
        </div>
        <div className="items-center flex flex-col gap-5 mt-8">
          <Image
            src={whatsApp} //QR Code
            alt="QR Code para WhatsApp"
            width={80}
            height={80}
            className="rounded-md hover:scale-110 duration-300"
          />
          <span className="font-bold text-green-500">WhatsApp</span>
        </div>
      </div>
    </section>
  );
}
