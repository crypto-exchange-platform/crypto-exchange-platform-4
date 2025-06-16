
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 mb-4">
            Crypto
          </h3>
          <p className="text-gray-400">
            Secure, fast, and modern crypto trading platform designed for all types of investors.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Subscribe</h4>
          <p className="text-gray-400 mb-4">Get the latest updates, news and offers.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded bg-[#2a1b4d] text-white placeholder-gray-400 border border-transparent focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-4 rounded-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Crypto Platform. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
 