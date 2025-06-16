import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { FC } from "react";
interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
          Crypto
        </h1>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-6 text-white text-sm">
            <NavigationMenuItem>
              <a href="#how-it-works" className="hover:text-red-400">
                How It Works
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#cryptos" className="hover:text-red-400">
                Cryptos
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#features" className="hover:text-red-400">
                Features
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#testimonials" className="hover:text-red-400">
                Testimonial
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#news" className="hover:text-red-400">
                News
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white text-sm"
            onClick={onLogin}
          >
            Login
          </Button>
          <Button
            variant="default"
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-5 py-2 rounded-full"
            onClick={onSignup}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
