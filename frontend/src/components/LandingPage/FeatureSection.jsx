import Link from "next/link"
import { Button } from "../ui/button";
import { ArrowRight, Shield, RefreshCw, Wallet, BarChart3, Bell, Gift } from "lucide-react"
export const Features = () => {
    return (
<section id="features" className="py-16 bg-white">
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Key Features</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Throne combines smart subscription management with a secure coupon marketplace
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Feature 1 */}
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <RefreshCw className="h-7 w-7 text-blue-900" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">Smart Subscription Manager</h3>
      <p className="text-gray-600">
        Connect your accounts to automatically detect and manage subscriptions. Auto-pause inactive services and
        get renewal alerts.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <Gift className="h-7 w-7 text-green-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">Coupon Marketplace</h3>
      <p className="text-gray-600">
        Sell your unused GPay, Paytm, and other platform coupons instead of letting them expire. Buy discounts
        at lower prices.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <Shield className="h-7 w-7 text-yellow-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">Blockchain Security</h3>
      <p className="text-gray-600">
        All transactions are secured by blockchain technology. Coupons are tokenized for secure ownership
        transfer.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <Bell className="h-7 w-7 text-purple-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">Smart Notifications</h3>
      <p className="text-gray-600">
        Get timely alerts before subscription renewals. Receive notifications for coupon sales and purchases.
      </p>
    </div>

    {/* Feature 5 */}
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <Wallet className="h-7 w-7 text-red-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">ThroneCoins Rewards</h3>
      <p className="text-gray-600">
        Earn ThroneCoins when you sell coupons. Use them to pay for subscriptions or withdraw as real money.
      </p>
    </div>

    {/* Feature 6 */}
    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
        <BarChart3 className="h-7 w-7 text-indigo-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">Spending Analytics</h3>
      <p className="text-gray-600">
        Track your subscription spending and savings. Get insights on your financial habits.
      </p>
    </div>
  </div>
</div>
</section>
    )
};