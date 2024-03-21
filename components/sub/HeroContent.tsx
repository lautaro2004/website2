"use client"

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col gap-5 justify-center text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-10 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Tu ruta hacia la digitalización
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              ¡Juntos hacemos el camino!{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 max-w-[600px]"
        >
          Damos lo mejor en cada proyecto, trabajando codo a codo contigo para impulsar el éxito de tu negocio a través de la tecnología y la digitalización. ¡Juntos, avanzamos hacia un futuro digital emocionante!
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="order-1 md:order-2 w-full md:w-1/2 h-full flex justify-center items-center"
      >
        <Image
          src="/world-wide.svg"
          alt="world"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
