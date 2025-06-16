import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./ui/button"

const cryptos = [
  { name: "Bitcoin", price: "$43.7K", image: "/Bitcoin.png" },
  { name: "Litecoin", price: "$158", image: "/Litecoin.png" },
  { name: "Ethereum", price: "$3K", image: "/Etherium.png" },
  { name: "Bitcoin", price: "$43.7K", image: "/Bitcoin.png" },
  { name: "Litecoin", price: "$158", image: "/Litecoin.png" },
  { name: "Ethereum", price: "$3K", image: "/Etherium.png" },
]

const CryptoSlider = () => {
  const [current, setCurrent] = useState(0)

  const visibleCards = cryptos.slice(current, current + 3)

  const next = () => {
    setCurrent((prev) => (prev + 1 >= cryptos.length - 2 ? 0 : prev + 1))
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? cryptos.length - 3 : prev - 1))
  }

  return (
<section
  className="relative text-center text-white pt-52 pb-32 overflow-hidden bg-gradient-to-br from-black via-violet-950 to-black"
>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
          Available Cryptos
        </h2>
        <p className="text-gray-400 mb-10">
          Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 text-white hover:text-red-500 bg-[#1c123a] p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-12">
            <AnimatePresence mode="popLayout">
              {visibleCards.map((crypto) => (
                <motion.div
                  key={crypto.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:-translate-y-1.5"
                >
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6 text-left">
                    <h3 className="text-2xl font-bold text-[#160E33] mb-2">
                      {crypto.name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-red-500 font-extrabold text-lg">
                        {crypto.price}
                      </span>
                      <Button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 text-sm rounded-full">
                        Trade Now
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={next}
            className="absolute right-0  z-10 text-white hover:text-red-500 bg-[#1c123a] p-2 rounded-full shadow-md"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CryptoSlider 