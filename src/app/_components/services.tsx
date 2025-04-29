"use client";

import { ChevronLeft, ChevronRight, Heart, Eye } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const photos = ["/brasileiro.jpg"];

  function prevSlide() {
    emblaApi?.scrollPrev();
  }

  function nextSlide() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="relative w-full max-w-3xl mx-auto py-10">
      {/* Galeria */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map((src, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <div className="w-[70%] h-[160px] relative group overflow-hidden rounded-3xl shadow-sm">
                {/* Imagem */}
                <Image
                  src={src}
                  alt={`Foto ${index}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-3xl"
                />

                {/* Ícones sobre a imagem */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 rounded-3xl">
                  {/* Coração */}
                  <button
                    aria-label="Adicionar aos favoritos"
                    className="bg-white/80 p-2 rounded-full shadow hover:bg-pink-200 transition-colors"
                  >
                    <Heart className="text-pink-500" size={18} />
                  </button>

                  {/* Ver detalhes */}
                  <Link href={`/galeria/${index}`}>
                    <button
                      aria-label={`Ver detalhes da foto ${index}`}
                      className="bg-white/80 p-2 rounded-full shadow hover:bg-blue-200 transition-colors"
                    >
                      <Eye className="text-blue-500" size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-sm hover:bg-gray-300 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Próximo"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-sm hover:bg-gray-300 transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  );
}
