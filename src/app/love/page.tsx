'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HeartHandshake, Sparkles } from 'lucide-react';
import Image from 'next/image';

interface MediaItem {
  src: string;
  type: "video" | "image";
  message: string;
}

export default function Love() {
  const router = useRouter();
  
  const media: MediaItem[] = [
    {
      src: "/img/foto3.png",
      type: "image",
      message: "A tu lado, hasta los días normales se vuelven especiales.",
    },
    {
      src: "/img/foto7.png",
      type: "image",
      message: "No prometo ser perfecto, pero si estar para ti en las buenas y en las malas",
    },
    {
      src: "/img/foto1.png",
      type: "image",
      message: "A tu lado te prometo dar todo mi esfuerzo para salir adelante juntos",
    },
    {
      src: "/img/foto2.png",
      type: "image",
      message: "Nuestros momentos son mi tesoro más valioso",
    },
    {
      src: "/mp4/video.mp4",
      type: "video",
      message: "gracias por cada sonrisa que me regalas",
    },
    {
      src: "/mp4/video1.mp4",
      type: "video",
      message: "Y quiero viajar contigo a donde sea",
    },
    {
      src: "/mp4/video2.mp4",
      type: "video",
      message: "Quiero ser tu fotografo personal, para capturar cada momento juntos",
    },
    {
      src: "/mp4/video3.mp4",
      type: "video",
      message: "Gracias por llegar a mi vida, desde que estoy contigo soy feliz",
    }
  ];

  const MediaContent = ({ item }: { item: MediaItem }) => {
    if (item.type === "video") {
      return (
        <video
          className="absolute top-0 left-0 w-full h-full object-contain bg-pink-50"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={item.src} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      );
    }
    return (
      <Image
        src={item.src}
        alt={item.message}
        fill
        className="absolute top-0 left-0 w-full h-full object-contain bg-pink-50"
      />
    );
  };

  return (
    <main className="min-h-screen bg-pink-100">
      <div className="max-w-lg mx-auto p-4 sm:p-8">
        <div className="mb-8 sm:mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <video 
              className="absolute top-0 left-0 w-full h-full rounded-2xl object-contain bg-black"
              controls
              autoPlay
              muted
              playsInline
            >
              <source src="/mp4/videoPrincipal.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8 text-center mb-8 sm:mb-12">
          <div className="animate-fade-in">
            <HeartHandshake className="w-12 h-12 sm:w-20 sm:h-20 mx-auto text-pink-500 mb-4" />
            <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-pink-600">
              Gracias por decir que sí ❤️
            </h2>
            <p className="text-lg sm:text-2xl text-pink-500">
              Cada momento contigo es una aventura maravillosa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-8">
            {media.map((item, index) => (
              <div key={index} className="group relative transform transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div className="relative w-full" style={{ paddingTop: '100%' }}>
                    <MediaContent item={item} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="text-sm sm:text-lg font-medium">{item.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="bg-pink-500 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-xl 
                     transform transition-all duration-300 hover:scale-105 hover:bg-pink-600
                     flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            Regresar al Inicio
          </button>
        </div>
      </div>
    </main>
  );
}