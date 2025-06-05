import { useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HomePage() {
  useEffect(() => {
    document.title = "CB Pneus - Officina a Senorbì";

    // Inizializza lo script di Elfsight se non già presente
    const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
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
            C.B. Pneus è l’officina di riferimento a Senorbì per la manutenzione dei tuoi veicoli. Con oltre 40 anni di esperienza e un team altamente qualificato, offriamo professionalità, velocità e attenzione al dettaglio. Facciamo parte del programma Superservice di Goodyear.
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

      {/* Prenotazione */}
      <section id="prenota" className="px-6 py-16 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Prenota la tua revisione</h2>
          <a
            href="https://www.revisionionline.com/it/centri-revisione/prenota/cagliari-senorbi/cbpneus-senorbi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black hover:bg-neutral-800 text-white px-6 py-3 text-lg rounded-2xl shadow-xl">
              Vai al portale RevisioniOnline
            </button>
          </a>
        </motion.div>
      </section>

      {/* Recensioni */}
      <section className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Cosa dicono i nostri clienti</h2>
        <div className="elfsight-app-bc69b34b-e033-4438-9fbe-60a257e8b92f" data-elfsight-app-lazy></div>
      </section>

      {/* Contatti */}
      <section className="px-6 py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contattaci</h2>
          <p>📍 Via Alessandro Manzoni, 6 - 09040 Senorbì (SU)</p>
          <p>📞 392 2329341</p>
          <p>✉️ cbpneusrls@gmail.com</p>
        </motion.div>
      </section>

      {/* Mappa */}
      <section className="px-6 pb-16">
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="CB Pneus Senorbì"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.3521299913223!2d9.100675215256938!3d39.535156679482074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12dc2a29ffcd01b7%3A0x6fbd49aa44cfb5d4!2sVia%20Alessandro%20Manzoni%2C%206%2C%2009040%20Senorb%C3%AC%20SU!5e0!3m2!1sit!2sit!4v1717580436000!5m2!1sit!2sit"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-neutral-700">
        © {new Date().getFullYear()} C.B. Pneus - Tutti i diritti riservati
      </footer>
    </div>
  );
}
