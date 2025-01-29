'use client';

import { useRouter } from 'next/navigation';
import { 
  Heart,
  Cloud, 
  CloudRain, 
  Sparkles,
  Stars,
  Moon,
  HeartCrack,
  Flower,
  MessageCircleHeart
} from 'lucide-react';
import { useState } from 'react';

export default function Pregunta1() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const messages = [
    {text: "¿De verdad no quieres ser mi San Valentín?", icon: <Heart className="inline-block w-6 h-6 ml-2" />},
    {text: "Piénsalo una vez más...", icon: <Stars className="inline-block w-6 h-6 ml-2" />},
    {text: "Tu respuesta anterior me puso muy triste", icon: <HeartCrack className="inline-block w-6 h-6 ml-2" />},
    {text: "¿Ni siquiera por todos los momentos lindos?", icon: <Sparkles className="inline-block w-6 h-6 ml-2" />},
    {text: "Dame una oportunidad más", icon: <Flower className="inline-block w-6 h-6 ml-2" />}
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <Cloud className="w-24 h-24 text-slate-300 absolute top-20 left-20 animate-pulse" />
        <CloudRain className="w-16 h-16 text-slate-400 absolute top-40 right-32 animate-bounce" />
        <Moon className="w-12 h-12 text-slate-300 absolute bottom-32 right-40 animate-pulse" />
        <Stars className="w-16 h-16 text-slate-300 absolute top-32 left-40 animate-pulse" />
      </div>

      <div className="max-w-2xl mx-auto p-8 text-center relative backdrop-blur-sm">
        <div 
          className="transition-transform duration-500 ease-in-out transform hover:scale-110"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {isHovering ? (
            <Heart 
              className="w-24 h-24 mx-auto text-red-400 animate-bounce"
            />
          ) : (
            <HeartCrack 
              className="w-24 h-24 mx-auto text-slate-400 animate-pulse"
            />
          )}
        </div>

        <h1 className="text-4xl font-bold text-slate-600 mb-8 mt-6 flex items-center justify-center">
          {randomMessage.text}
          {randomMessage.icon}
        </h1>

        <div className="space-y-6">
          <button
            onClick={() => router.push('/Two')}
            className="w-full bg-gradient-to-r from-violet-400 to-purple-400 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Tal vez... quiero pensarlo de nuevo</span>
            <MessageCircleHeart className="w-6 h-6" />
          </button>

          

          <p className="text-slate-500 italic text-sm animate-pulse flex items-center justify-center gap-2">
            <HeartCrack className="w-4 h-4" />
            <span>Cada no rompe un corazoncito</span>
            <HeartCrack className="w-4 h-4" />
          </p>
        </div>

        <div className="mt-8 text-slate-400 text-xs flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>No sabes cuánto significaría para mí un sí</span>
          <Sparkles className="w-4 h-4" />
        </div>
      </div>
    </main>
  );
};