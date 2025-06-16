import { Quote } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "FX Trader",
    avatar: "/Avatar3.png",
    text: "Krypto's intuitive interface and fast trade execution helped me scale my profits without hassle.",
  },
  {
    name: "Bessie Cooper",
    role: "Stock Manager",
    avatar: "/Avatar1.png",
    text: "The real-time analytics and low trading fees are game-changers. ",
  },
  {
    name: "Albert Flores",
    role: "Crypto Analyst",
    avatar: "/Avatar2.png",
    text: "I love the security and transparency on this platform. ",
  },
]

const Testimonials = () => {
  const [current] = useState(0)


  return (
    <section className="bg-gradient-to-br from-black via-violet-950 to-black py-24 px-4 text-white text-center ">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">30 Million Users Worldwide</h2>
      <p className="text-gray-400 mb-12">
        Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
      </p>

      <div className="relative flex justify-center items-center ">
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border rounded-xl px-6 py-10 bg-[#1d123b] shadow-md transition-all duration-300 ${
                  index === current ? 'border-red-500 shadow-red-500/40' : 'border-transparent'
                }`}
              >
                <Quote className="text-red-500 w-6 h-6 mx-auto mb-4" />
                <p className="text-sm text-gray-300 mb-6">{t.text}</p>
                <div className="flex flex-col items-center">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mb-2 border border-white"
                  />
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-red-500 mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      
      </div>
    </section>
  )
}

export default Testimonials
 