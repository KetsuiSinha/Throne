import Link from "next/link"
import { Button } from "../ui/button";
import { ArrowRight, Shield, RefreshCw, Wallet, BarChart3, Bell, Gift } from "lucide-react"
export default function Hero () {
    return (
    <section className="w-full bg-gradient-to-b from-white to-[#f7f9fc] relative overflow-hidden">
    <div className="w-full py-12 lg:py-12 px-6 md:px-12">
        <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
            <div className="flex gap-8 flex-col">
            <div className="flex gap-6 flex-col">
                <h1 className="text-4xl md:text-5xl max-w-lg tracking-tighter text-left text-gray-900">
                Smart Subscription Management & Coupon Marketplace
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left text-gray-600">
                Intelligent Subscription Management and Blockchain-Based Coupon Marketplace
                </p>
            </div>
            <div className="flex flex-row gap-6">
                <Button size="lg" className="gap-4" variant="outline">
                Get Started
                </Button>
                <Button size="lg" className="gap-4 bg-[#0052cc] text-white hover:bg-[#0041a8]">
                Learn More
                </Button>
            </div>
            </div>
            <div className="bg-muted rounded-md aspect-[4/3] w-full max-w-xl mx-auto"></div>
        </div>
        </div>
    </div>
    </section>
)
};