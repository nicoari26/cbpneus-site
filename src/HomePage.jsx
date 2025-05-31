import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function HomePage() {
  useEffect(() => {
    document.title = "CB Pneus - Officina a Senorbì";
  }, []);

  return (
    <div className="bg-white text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-white to-gray-100">
        <motion.img
          src="/logo.C.BpneusbozzaNeroRosso.png"
          alt="CB Pneus Logo"
          className="w-64 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-3xl md:text-5xl text-neutral-900 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          40 anni di esperienza al servizio della tua sicurezza su strada.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a href="#prenota">
            <button className="bg-black hover:bg-neutral-800 text-white px-6 py-3 text-lg rounded-2xl shadow-xl">
              Prenota ora
            </button>
          </a>
        </motion.div>
      </section>

      {/* Galleria */}
      <section className="px-6 py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">La nostra officina</h2>
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: true,
          }}
          className="w-full max-w-6xl mx-auto px-4"
        >
          {["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"].map((img, index) => (
            <SwiperSlide key={index} className="w-[80%] md:w-[600px]">
              <img
                src={`/${img}`}
                alt={`Galleria ${index + 1}`}
                className="rounded-xl shadow-xl object-cover w-full h-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Chi Siamo */}
      <section className="px-6 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">Chi siamo</h2>
          <p className="text-center max-w-3xl mx-auto text-lg">
            C.B. Pneus è l’officina di riferimento a Senorbì per la manutenzione dei tuoi v
