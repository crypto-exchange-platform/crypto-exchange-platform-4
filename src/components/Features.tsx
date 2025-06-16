import { Trophy, Receipt, Lock, DollarSign, Users, Clock } from "lucide-react"

const features = [
  {
    title: "Weekly Trading Contest",
    desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <Trophy className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Less Commission On Trade",
    desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <Receipt className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Safe And Secure Trading platform",
    desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <Lock className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Instant Withdraw Process",
    desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <DollarSign className="w-6 h-6 text-red-500" />,
  },
  {
    title: "Monthly Commition",
    desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <Users className="w-6 h-6 text-red-500" />,
  },
  {
    title: "24/7 Support Team",
    desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <Clock className="w-6 h-6 text-red-500" />,
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-[#160E33] py-24 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Attractive Features</h2>
        <p className="text-gray-400 mb-12">
          Windafull makes playing the UK's best raffles easy and fun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 bg-[#1e143a] rounded-xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
 