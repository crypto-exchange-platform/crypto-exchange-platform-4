import { useState } from "react";
import Header from "./Header";
import { LoginModal } from "./LogInModal";
import { SignupModal } from "./SignUpModal";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import CryptoSlider from "./CryptoSlider";
import FeaturesSection from "./Features";
import AppPromotion from "./AppPromotions";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import ForexNews from "./ForexNews";
function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && <SignupModal onClose={() => setModal(null)} />}

      <Header
        onLogin={() => setModal("login")}
        onSignup={() => setModal("signup")}
      />
      <Hero />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="cryptos">
        <CryptoSlider />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="news">
        <ForexNews />
      </section>
      <section id="app">
        <AppPromotion />
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
