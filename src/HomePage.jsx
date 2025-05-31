import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

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
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg"
        >
          {["g1.jpg", "g2.jpg", "g3.jpg", "g4.jpg"].map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/${img}`}
                alt={`Galleria ${index + 1}`}
                className="w-full h-auto object-cover transition-opacity duration-[2000ms]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Superservice Goodyear */}
      <section className="px-6 py-16 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Superservice Goodyear</h2>
          <p className="text-lg">
            Siamo parte del network <strong>Superservice Goodyear</strong>: una rete di officine selezionate
            che garantisce al cliente standard elevati di qualità, sicurezza e professionalità su tutto il territorio nazionale.
          </p>
        </motion.div>
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
            C.B. Pneus è l’officina di riferimento a Senorbì per la manutenzione dei tuoi veicoli. Con oltre 40 anni di esperienza e un team altamente qualificato, offriamo professionalità, velocità e attenzione al dettaglio.
          </p>
        </motion.div>
      </section>

      {/* Servizi */}
      <section className="px-6 py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Gommista plurimarca</li>
              <li>Assetto completo 3D</li>
              <li>Centro revisioni</li>
              <li>Controllo freni e sospensioni</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Meccanica leggera</li>
              <li>Cambio olio</li>
              <li>Climatizzazione</li>
              <li>Installazione ganci traino</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Recensioni Google – Embed Elfsight */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Recensioni Google</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <script src="https://static.elfsight.com/platform/platform.js" async></script>
              <div class="elfsight-app-bc69b34b-e033-4438-9fbe-60a257e8b92f" data-elfsight-app-lazy></div>
            `,
          }}
        />
      </section>

      {/* Mappa */}
      <section className="px-6 py-16 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Dove ci troviamo</h2>
        <div className="w-full max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!2d..."
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg border"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Orari di apertura</h3>
            <p>Lun - Ven: 8:30 - 13:00 / 15:00 - 19:00</p>
            <p>Sabato: 8:30 - 13:00</p>
            <p>Domenica: chiuso</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contatti</h3>
            <p>📍 Via Alessandro Manzoni, 6 - Senorbì (SU)</p>
            <p>📞 392 2329341</p>
            <p>✉️ cbpneusrls@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Seguici</h3>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-gray-400">© {new Date().getFullYear()} C.B. Pneus - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}
