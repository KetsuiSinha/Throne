import Link from "next/link"
import { Button } from "../ui/button";
import { ArrowRight, Shield, RefreshCw, Wallet, BarChart3, Bell, Gift } from "lucide-react"
export default function HowItWorks() {
    return (
        <>
            <div id="how-it-works" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">How It Works</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Throne makes managing subscriptions and selling coupons simple and secure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center mb-6 font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Connect Your Accounts</h3>
                            <p className="text-gray-600">
                                Link your GPay, bank accounts, or upload statements. Our AI automatically detects all your
                                subscriptions.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center mb-6 font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Manage Subscriptions</h3>
                            <p className="text-gray-600">
                                Get notifications before renewals. Throne automatically pauses inactive subscriptions and reactivates
                                them when you use the service.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                            <div className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center mb-6 font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mb-4">Trade Coupons</h3>
                            <p className="text-gray-600">
                                List your unused coupons on the marketplace. When someone buys them, ownership transfers securely via
                                blockchain.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Subscriptions?</h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                        Join Throne today and start saving money on subscriptions while earning from your unused coupons.
                    </p>
                    <Link
                        href="/signup"
                        className="px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-lg font-semibold"
                    >
                        Get Started for Free
                    </Link>
                    <p className="mt-4 text-blue-200">No credit card required</p>
                </div>
            </div>  
        </>
    )
};