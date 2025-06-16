import { PlayCircle } from "lucide-react"

const steps = [
  "Create an account",
  "Download platform",
  "Select crypto",
  "Start trading",
]

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-violet-950 to-black   py-24 px-4 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="/Video.png"
            alt="Trading Screenshot"
            className="w-full h-auto rounded-xl"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-red-500 hover:scale-105 transition-transform duration-300" />
          </button>
        </div>

        <div>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">
            How to Trade With Crypto
          </h2>
          <p className="text-gray-400 mb-8">
            Tincidunt id nibh orci nibh justo nulla elementum, sed vel.
          </p>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-[#1D133E] px-6 py-3 rounded-full border border-red-500/50 text-white shadow-red-500/20 shadow-lg hover:scale-[1.02] transition"
              >
                <div className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                  {`0${index + 1}`}
                </div>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
 