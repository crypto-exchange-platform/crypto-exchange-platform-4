import { useState } from "react"
import Header from "./Header"
import { LoginModal } from "./LogInModal"
import { SignupModal } from "./SignUpModal"
import Hero from "./Hero"
import HowItWorks from "./HowItWorks"
import CryptoSlider from "./CryptoSlider"


function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null)

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && <SignupModal onClose={() => setModal(null)} />}

      <Header onLogin={() => setModal("login")} onSignup={() => setModal("signup")} />
      <Hero />
      <HowItWorks/>
      <CryptoSlider/>
    </div>
  )
}

export default LandingPage 