import Link from "next/link"
import { Button } from "../ui/button";
import { ArrowRight, Shield, RefreshCw, Wallet, BarChart3, Bell, Gift } from "lucide-react"
export default function NavBar() {
    return (
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">Throne</span>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#features" className="text-gray-600 hover:text-blue-800">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-blue-800">
              How It Works
            </Link>
            <Link href="#benefits" className="text-gray-600 hover:text-blue-800">
              Benefits
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden md:block px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      </header>
    )
};