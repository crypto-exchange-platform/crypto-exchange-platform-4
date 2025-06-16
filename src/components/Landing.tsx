import { useState } from "react"
import Header from "./Header"
import { LoginModal } from "./LogInModal"
import { SignupModal } from "./SignUpModal"
import Hero from "./Hero"


function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null)

  return (
    <div className="flex flex-col bg-[#160E33] min-h-screen overflow-x-hidden">
      {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && <SignupModal onClose={() => setModal(null)} />}

      <Header onLogin={() => setModal("login")} onSignup={() => setModal("signup")} />
      <Hero />
    </div>
  )
}

export default LandingPage 