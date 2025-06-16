
const AppPromotion = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-44 px-4"
      style={{ backgroundImage: "url('/Bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
          Most advanced crypto trading <br /> platform ever!
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="#">
            <img src="/googlePlay.png" alt="Google Play" className="h-12 md:h-14" />
          </a>
          <a href="#">
            <img src="/appStore.png" alt="App Store" className="h-12 md:h-14" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AppPromotion
 