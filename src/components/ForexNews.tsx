import { useState } from "react";

const newsItems = [
  {
    title: "Dollar Strengthens as Fed Signals More Rate Hikes",
    summary:
      "The US dollar index climbed to a three-month high after Federal Reserve officials indicated further interest rate increases might be necessary to combat inflation.",
    date: "June 15, 2023",
    readTime: "5 min read",
    category: "forex",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Bitcoin Surpasses $30K as Institutional Interest Grows",
    summary:
      "Bitcoin broke through the $30,000 resistance level amid increasing institutional adoption and positive regulatory developments in key markets.",
    date: "June 14, 2023",
    readTime: "4 min read",
    category: "bitcoin",
    image:
      "https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "EU Approves Comprehensive Crypto Regulation Framework",
    summary:
      "The European Parliament has given final approval to the Markets in Crypto-Assets (MiCA) regulation, establishing a comprehensive framework for crypto assets across the EU.",
    date: "June 13, 2023",
    readTime: "6 min read",
    category: "regulation",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Ethereum Leads Altcoin Rally Ahead of Shanghai Upgrade",
    summary:
      "Ethereum surged 8% in 24 hours, pulling other major altcoins higher as investors anticipate the upcoming Shanghai upgrade that will enable staked ETH withdrawals.",
    date: "June 12, 2023",
    readTime: "3 min read",
    category: "altcoins",
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1132&q=80",
  },
    {
    title: "Yen Slumps After BOJ Maintains Loose Monetary Policy",
    summary:
      "The Japanese yen weakened sharply as the Bank of Japan held its ultra-loose monetary policy, diverging from the global tightening trend.",
    date: "June 11, 2023",
    readTime: "4 min read",
    category: "forex",
    image:
      "https://images.unsplash.com/photo-1634097538301-5d5f8b09eb84?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Altcoins Surge Following Bitcoin Rally Momentum",
    summary:
      "Altcoins such as Solana and Avalanche posted double-digit gains, fueled by Bitcoin’s bullish momentum and improving investor sentiment.",
    date: "June 10, 2023",
    readTime: "5 min read",
    category: "altcoins",
    image:
      "https://plus.unsplash.com/premium_photo-1670249421308-15ae3965c326?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

const categories = ["all", "forex", "bitcoin", "altcoins", "regulation"];

const ForexNews = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredNews =
    activeCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 text-white rounded-full mb-3">
            Market Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Latest Forex & Crypto News
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            Stay updated with the latest market trends, analysis, and breaking
            news in the forex and cryptocurrency world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-filter px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{item.date}</span>
                  <span className="mx-2">•</span>
                  <span>{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.summary}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium group"
                >
                  Read more
                  <i className="fas fa-arrow-right ml-2 transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

   
<div
  className="relative bg-cover bg-center bg-no-repeat rounded-2xl p-8 md:p-10 mt-16 text-white shadow-lg"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1639825988283-39e5408b75e8?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  }}
>
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl"></div>

  <div className="relative z-10 max-w-4xl mx-auto">
    <div className="md:flex items-center justify-between">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h3 className="text-2xl font-bold mb-2">Stay Updated with Market News</h3>
        <p className="opacity-90">
          Subscribe to our newsletter and get the latest forex and crypto
          updates directly to your inbox.
        </p>
      </div>
      <div className="md:w-1/2">
        <form className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg text-white focus:outline-red focus:ring-2 focus:ring-white shadow-lg"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
 </div>
    </section>
  );
};

export default ForexNews;
 