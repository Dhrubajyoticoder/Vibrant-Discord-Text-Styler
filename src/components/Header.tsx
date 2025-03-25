import React from 'react';
import { motion } from 'framer-motion';
import "tailwindcss";

const Header: React.FC = () => {
  return (
    <motion.header 
      className="py-10 mb-12 border-b border-gray-300 bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg rounded-b-3xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container px-6 md:px-10 mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide drop-shadow-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Vibrant Discord Text Styler
        </motion.h1>
        <motion.p 
          className="mt-5 text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Transform your Discord messages with stylish, colorful, and expressive text formatting effortlessly!
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;

