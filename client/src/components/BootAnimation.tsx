import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootAnimationProps {
  onComplete: () => void;
}

const BootAnimation: React.FC<BootAnimationProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [loadingText, setLoadingText] = useState('');

  const bootMessages = [
    'Initializing Portfolio OS...',
    'Loading desktop environment...',
    'Setting up file system...',
    'Starting window manager...',
    'Configuring terminal...',
    'Welcome to Portfolio Desktop!'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stage < bootMessages.length - 1) {
        setStage(stage + 1);
      } else {
        setTimeout(onComplete, 1000);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [stage, onComplete]);

  useEffect(() => {
    if (stage < bootMessages.length) {
      const message = bootMessages[stage];
      let currentText = '';
      let charIndex = 0;

      const typeWriter = setInterval(() => {
        if (charIndex < message.length) {
          currentText += message[charIndex];
          setLoadingText(currentText);
          charIndex++;
        } else {
          clearInterval(typeWriter);
        }
      }, 50);

      return () => clearInterval(typeWriter);
    }
  }, [stage]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* ASCII Art Logo */}
        <motion.div
          className="text-green-400 font-mono text-sm mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <pre>{`
    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
    ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
          `}</pre>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          className="w-80 mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="bg-gray-800 rounded-full h-2">
            <motion.div
              className="bg-green-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((stage + 1) / bootMessages.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="text-green-400 font-mono text-lg mb-4 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {loadingText}
          <motion.span
            className="text-green-400"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        {/* System Info */}
        <motion.div
          className="text-gray-400 font-mono text-xs text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div>Portfolio OS v2.0.1</div>
          <div>Build: Interactive Desktop Experience</div>
          <div className="mt-2 text-green-400">Press any key to continue...</div>
        </motion.div>

        {/* Sparkle Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default BootAnimation;