'use client';

import { useRouter } from 'next/navigation';
import { 
  HeartHandshake, 
  Sparkles, 
  Stars, 
  PartyPopper,
  HeartPulse
} from 'lucide-react';
import { useState, useCallback } from 'react';

interface ConfettiPiece {
  left: number;
  animationDuration: number;
  size: number;
  type: number;
  delay: number;
  rotation: number;
  color: string;
}

export default function Pregunta2() {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const createConfetti = useCallback(() => {
    const newConfetti: ConfettiPiece[] = [];
    for (let i = 0; i < 200; i++) {
      const left = Math.random() * 100;
      const animationDuration = 2 + Math.random() * 3;
      const size = 8 + Math.random() * 15;
      const type = Math.floor(Math.random() * 3);
      const delay = Math.random() * 0.5;
      const rotation = Math.random() * 360;
      const color = [
        '#60A5FA',
        '#93C5FD',
        '#3B82F6',
        '#2563EB',
        '#FFD700',
        '#FFA500',
        '#FF69B4',
        '#7B68EE'
      ][Math.floor(Math.random() * 8)];
      
      newConfetti.push({ 
        left, 
        animationDuration, 
        size, 
        type, 
        delay, 
        rotation,
        color 
      });
    }
    setConfetti(newConfetti);
    setTimeout(() => router.push('/love'), 2000);
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 flex items-center justify-center relative overflow-hidden">
      {confetti.map((conf, i) => (
        <div
          key={i}
          className="absolute top-0 animate-fall"
          style={{
            left: `${conf.left}%`,
            width: `${conf.size}px`,
            height: conf.type === 2 ? `${conf.size * 1.5}px` : `${conf.size}px`,
            backgroundColor: conf.color,
            borderRadius: conf.type === 0 ? '50%' : '2px',
            transform: `rotate(${conf.rotation}deg)`,
            animation: `confettiFall ${conf.animationDuration}s linear ${conf.delay}s`,
            opacity: 0,
            zIndex: 50
          }}
        />
      ))}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="w-16 h-16 text-sky-200 absolute top-20 left-20 animate-pulse" />
        <Stars className="w-20 h-20 text-blue-200 absolute top-40 right-32 animate-bounce" />
        <PartyPopper className="w-16 h-16 text-indigo-200 absolute bottom-32 left-40 animate-pulse" />
      </div>

      <div className="max-w-2xl mx-auto p-8 text-center relative backdrop-blur-sm bg-white/30 rounded-2xl shadow-xl">
        <div 
          className="mb-8 transition-transform duration-500"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <HeartHandshake 
            className={`w-24 h-24 mx-auto ${
              isHovering 
                ? 'text-blue-500 animate-bounce' 
                : 'text-blue-400 animate-pulse'
            }`} 
          />
        </div>

        <div className="space-y-6">
          <button
            onClick={createConfetti}
            className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span>Bueno... ya que insistes tanto</span>
            <PartyPopper className="w-6 h-6" />
          </button>

          <div className="flex justify-center space-x-4 text-blue-400 mt-8">
            <Stars className="w-6 h-6 animate-pulse" />
            <HeartPulse className="w-6 h-6 animate-pulse" />
            <PartyPopper className="w-6 h-6 animate-pulse" />
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          <p className="text-blue-400 italic text-sm">
            Jajaja sabia que no te podias negarme
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translateY(25vh) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateY(75vh) rotate(270deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
};