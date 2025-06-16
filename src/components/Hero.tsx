import { Button } from "./ui/button"
import { motion } from "framer-motion"

const countdownItems = [
  { label: "Days", value: "02" },
  { label: "Hours", value: "12" },
  { label: "Minutes", value: "23" },
  { label: "Seconds", value: "35" },
]

const Hero = () => {
  return (
    <section
      className="relative text-center text-white pt-52 pb-32 overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Next Generation <br /> Crypto Trading
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-lg md:text-xl text-gray-300"
        >
          Crypto Market Starts in
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 my-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {countdownItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="w-20 h-20 bg-gradient-to-b from-red-500 to-orange-500 text-white rounded-xl flex flex-col items-center justify-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <span className="text-xl font-extrabold">{item.value}</span>
              <span className="text-[10px] uppercase tracking-wider mt-1">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 mt-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button className="bg-red-500 hover:bg-red-600 text-white text-sm px-12 py-7 rounded-full shadow-xl">
            Download App
          </Button>
          <Button
            variant="outline"
            className="border-white text-red-600 text-sm px-12 py-7 rounded-full hover:text-red-400 hover:border-red-400"
          >
            Trade Crypto
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mt-12 text-white text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span>🪙 Bitcoin</span>
          <span>⚪ Litecoin</span>
          <span>🔗 Chainlink</span>
          <span>💠 Siacoin</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
 