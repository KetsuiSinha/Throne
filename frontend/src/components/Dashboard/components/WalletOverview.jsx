import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, CreditCard, Wallet } from "lucide-react"

export function WalletOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2 border border-emerald-600 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle>Wallet Balance</CardTitle>
          <CardDescription>Your current wallet balance and recent transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-emerald-50 p-3">
                <Wallet className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm text-emerald-600 font-semibold">Available Balance</p>
                <p className="text-3xl font-extrabold text-emerald-600">₹1,250.00</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-600"
              >
                <ArrowDown className="h-4 w-4" />
                Add Funds
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-600"
              >
                <ArrowUp className="h-4 w-4" />
                Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-emerald-600 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle>Payment Methods</CardTitle>
          <CardDescription>Your saved payment methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-emerald-50 p-2">
                <CreditCard className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-600">Visa ending in 4242</p>
                <p className="text-xs text-emerald-600">Expires 12/25</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-600"
            >
              Add Payment Method
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
