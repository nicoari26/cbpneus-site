import { useEffect } from "react";
import { motion } from "framer-motion";

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="bg-black hover:bg-neutral-800 text-white px-6 py-3 text-lg rounded-2xl shadow-xl"
  >
    {children}
  </button>
);

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
          <Button>
            Prenota ora
          </Button>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-4">Chi siamo</h2>
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
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">Servizi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-lg">
            <ul className="list-disc pl-5 space-y-2">
              <li>Gommista plurimarca</li>
              <li>Assetto completo 3D</li>
              <li>Centro revisioni</li>
              <li>Controllo freni e sospensioni</li>
            </ul>
            <ul className="list-disc pl-5 space-y-2">
              <li>Meccanica generale</li>
              <li>Cambio olio</li>
              <li>Climatizzazione</li>
              <li>Installazione ganci traino</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Vantaggi */}
      <section className="px-6 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Perché scegliere noi?</h2>
          <p className="text-lg mb-4">Offriamo un servizio completo per la sicurezza del tuo veicolo. Utilizziamo attrezzature moderne, ricambi di qualità e garantiamo massima trasparenza e attenzione al cliente.</p>
          <p className="text-lg">C.B. Pneus è sinonimo di affidabilità a Senorbì da oltre 40 anni.</p>
        </motion.div>
      </section>

      {/* Prenotazione */}
      <section className="px-6 py-16 bg-gray-50 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">Prenota la tua revisione</h2>
          <a href="https://www.revisionionline.com/it/centri-revisione/prenota/cagliari-senorbi/cbpneus-senorbi" target="_blank" rel="noopener noreferrer">
            <Button>
              Vai al portale RevisioniOnline
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Contatti */}
      <section className="px-6 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">Contattaci</h2>
          <p>Via Alessandro Manzoni, 6 - 09040 Senorbì (SU)</p>
          <p>📞 392 2329341</p>
          <p>✉️ cbpneusrls@gmail.com</p>
        </motion.div>
      </section>
    </div>
  );
}
