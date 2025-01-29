'use client';

import { useRouter } from 'next/navigation';
import { HeartHandshake, Sparkles, Stars, Camera, Mail, Music } from 'lucide-react';

export default function Love() {
  const router = useRouter();
  
  // Array of photos with their messages
  const photos = [
    {
      src: "/api/placeholder/400/300",
      message: "El día que nos conocimos, mi mundo se llenó de color 💖",
      icon: <HeartHandshake className="w-6 h-6" />
    },
    {
      src: "/api/placeholder/400/300",
      message: "Cada sonrisa tuya ilumina mi día ✨",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      src: "/api/placeholder/400/300",
      message: "Juntos, todo es posible 💫",
      icon: <Stars className="w-6 h-6" />
    },
    {
      src: "/api/placeholder/400/300",
      message: "Nuestros momentos son mi tesoro más valioso 📸",
      icon: <Camera className="w-6 h-6" />
    },
    {
      src: "/api/placeholder/400/300",
      message: "Cada día te quiero más 💌",
      icon: <Mail className="w-6 h-6" />
    },
    {
      src: "/api/placeholder/400/300",
      message: "Eres la melodía de mi corazón 🎵",
      icon: <Music className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-pink-100">
      <div className="max-w-6xl mx-auto p-8">
        {/* Video Section */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <video 
            className="w-full rounded-2xl"
            controls
            autoPlay
            muted
          >
            <source src="/tu-video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        {/* Love Messages Section */}
        <div className="space-y-8 text-center mb-12">
          <div className="animate-fade-in">
            <HeartHandshake className="w-20 h-20 mx-auto text-pink-500 mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-pink-600">
              Gracias por decir que sí ❤️
            </h2>
            <p className="text-2xl text-pink-500">
              Cada momento contigo es una aventura maravillosa
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {photos.map((photo, index) => (
              <div key={index} className="group relative transform transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={photo.src}
                    alt={`Momento ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-500/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        {photo.icon}
                        <p className="text-lg font-medium">{photo.message}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/80 p-8 rounded-2xl backdrop-blur-sm shadow-xl mt-12">
            <h3 className="text-3xl font-bold mb-4 text-pink-600">Nuestro Amor</h3>
            <p className="text-xl text-pink-500">
              Juntos escribiremos las páginas más bonitas de nuestra historia ✨
            </p>
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center">
          <button
            onClick={() => router.push('/')}
            className="bg-pink-500 text-white font-bold py-4 px-10 rounded-full shadow-xl 
                     transform transition-all duration-300 hover:scale-105 hover:bg-pink-600
                     flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            Regresar al Inicio
          </button>
        </div>
      </div>
    </main>
  );
}