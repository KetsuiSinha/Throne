import Link from "next/link"
import { Button } from "../ui/button";
import { ArrowRight, Shield, RefreshCw, Wallet, BarChart3, Bell, Gift } from "lucide-react"
import NavBar from "./NavBar";
import Hero from "./HeroSection";
import { Features } from "./FeatureSection";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";

export default function LandingPage() {
  return (
    <>
  <NavBar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <Footer/>
</>
  )
}
