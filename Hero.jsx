import React from "react";
import profileImage from "../assets/images/zeeluch1.png";
import resumeFile from "../assets/resume-sreyluch-seang.pdf";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { FaTelegramPlane } from "react-icons/fa";

const Hero = ({ name = "SEANG SREYLUCH", role = "Web Front-end | Training" }) => {
  return (
    <section
      id="home"
      className="min-h-screen bg-primary-dark pt-24 flex items-center"
    >
      <div className="container mx-auto p-8 grid md:grid-cols-2 items-center gap-12 h-auto
       bg-gray-800 rounded-xl">

        {/* LEFT CONTENT */}
        <motion.div
          className="text-text-light order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,  
          }}
        >
          <p className="mb-2 text-xl font-light text-accent-gold tracking-widest">
            HELLO!
          </p>

          <h2 className="mb-4 text-5xl md:text-7xl font-extrabold leading-tight">
            I'm <span className="text-accent-gold">{name}</span>
          </h2>

          <p className="mb-8 text-2xl md:text-3xl font-light">{role}</p>

          {/* BUTTONS */}
          <div className="flex space-x-4">

            {/* Resume Download */}
            <a
              href={resumeFile}
              className="flex items-center gap-2 border border-accent-gold px-6 py-3 font-bold 
               text-accent-gold rounded-full hover:bg-accent-gold hover:text-primary-dark 
               transition duration-300"
            >
              Resume
              <ArrowDownTrayIcon className="w-5 h-5" />
            </a>

            {/* Contact Button */}
            <button 
  className="bg-accent-gold px-6 py-3 font-bold text-primary-dark rounded-full
             flex items-center gap-2 hover:opacity-90 transition duration-300" 
  onClick={() => window.open('https://t.me/Ssreyluch', '_blank')}
>
  <FaTelegramPlane className="text-xl" />
  Contact
</button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <img
            src={profileImage}
            alt={name}
            className="w-full max-w-sm rounded-lg object-cover shadow-2xl
             shadow-accent-gold/50 transition-all duration-500 hover:scale-[1.02]"
            style={{ aspectRatio: "1 / 1" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
