'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Heart, 
  Sparkles, 
  Stars, 
  HeartHandshake, 
  XCircle,
  Flower2,
  SparklesIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [showSparkles, setShowSparkles] = useState(false);
  
  const images: string[] = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Mostrar sparkles cada 7 segundos
    const sparkleTimer = setInterval(() => {
      setShowSparkles(true);
      setTimeout(() => setShowSparkles(false), 1000);
    }, 7000);

    return () => {
      clearInterval(timer);
      clearInterval(sparkleTimer);
    };
  }, []);

  const handleNoClick = () => {
    router.push('/One');
  };

  const handleSiClick = () => {
    router.push('/love');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 relative overflow-hidden">
      {/* Fondo con efectos */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5 animate-pulse"></div>
      
      {/* Contenido principal */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative max-w-4xl mx-auto p-8"
      >
        {/* Encabezado con animación */}
        <div className="text-center mb-12 relative">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 text-transparent bg-clip-text mb-4"
          >
            Hola AnniBuu,
          </motion.h1>
          <p className="text-2xl text-gray-700 italic font-light">
            "Cada momento contigo es un regalo, ¿me permites seguir creando más momentos juntos?"
          </p>
          
          {/* Efectos de sparkles */}
          <AnimatePresence>
            {showSparkles && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -inset-4"
              >
                <Sparkles className="absolute top-0 left-1/4 text-yellow-400 w-6 h-6" />
                <Stars className="absolute top-1/2 right-1/4 text-pink-400 w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  
        {/* Carrusel mejorado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative h-96 mb-12 rounded-2xl overflow-hidden shadow-2xl group"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.1
              }}
              transition={{ duration: 1.5 }}
              className="absolute w-full h-full"
            >
              <img
                src={img}
                alt={`Momento ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
          
          {/* Indicadores del carrusel */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
  
        {/* Sección de botones mejorada */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text mb-8">
            ¿Quieres ser mi San Valentín?
          </h2>
          <div className="flex justify-center items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSiClick}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-pink-500/50 flex items-center gap-2"
            >
              <span>¡Sí, acepto!</span>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="inline-flex items-center"
              >
                <HeartHandshake className="w-6 h-6 mr-1" />
                <SparklesIcon className="w-4 h-4 text-yellow-200" />
              </motion.div>
            </motion.button>
  
            <motion.button
              whileHover={{ scale: 0.95 }}
              onClick={handleNoClick}
              className="bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 font-bold py-4 px-10 rounded-full shadow-lg flex items-center gap-2 hover:opacity-80 transition-all duration-300"
            >
              <span>No por ahora</span>
              <XCircle className="w-5 h-5" />
            </motion.button>
          </div>
  
          {/* Decoración adicional debajo de los botones */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <Flower2 className="w-6 h-6 text-pink-400" />
            <Stars className="w-6 h-6 text-purple-400" />
            <Sparkles className="w-6 h-6 text-rose-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}