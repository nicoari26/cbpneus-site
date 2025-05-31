import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function HomePage() {
  useEffect(() => {
    document.title = "CB Pneus - Officina a Senorbì";
  }, []);

  // Animazione logo in base allo scroll
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.5]);
  const x = useTransform(scrollY, [0, 200], [0, 200]);
  const y = useTransform(scrollY, [0, 200], [0, -80]);

  return (
    <div className="bg-white text-neutral-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
        <motion.img
          src="/logo.C.BpneusbozzaNeroRosso.png"
          alt="CB Pneus Logo"
          style={{ scale, x, y }}
          className="w-64 mb-6 fixed top-10 left-1/2 transform -translate-x-1/2 z-50"
        />
        <motion.h1
          className="text-3xl md:text-5xl text-neutral-900 font-semibold mt-48"
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
          modules={[Autoplay, EffectFade]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          effect="fade"
          speed={1500}
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          {["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/${img}`}
                alt={`Galleria ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-1000 transform scale-105 hover:scale-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
