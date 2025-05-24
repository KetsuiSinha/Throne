import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { WalletOverview } from "@/components/Dashboard/components/WalletOverview"
import { TransactionHistory } from "@/components/Dashboard/components/TransactionHistory"

export default function WalletPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-800">💰 Wallet & Rewards</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
            Withdraw
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Add Funds</Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
          {["overview", "transactions", "rewards"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-4 py-2 text-slate-700"
            >
              {tab === "overview" ? "Overview" : tab === "transactions" ? "Transactions" : "ThroneCoins"}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <WalletOverview />
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="bg-white border border-slate-200 shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-800">Transaction History</CardTitle>
              <CardDescription>Your recent wallet transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <TransactionHistory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rewards" className="space-y-6">
          <Card className="bg-white border border-slate-200 shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-800">ThroneCoins</CardTitle>
              <CardDescription>Your reward points and how to use them</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-emerald-50 border border-emerald-100 rounded-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-emerald-700">250</CardTitle>
                    <CardDescription className="text-emerald-600">Available ThroneCoins</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Use your ThroneCoins to buy coupons or renew subscriptions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 border border-slate-200 rounded-xl">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl text-slate-800">₹250</CardTitle>
                    <CardDescription className="text-slate-600">Equivalent Value</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">1 ThroneCoin = ₹1 in platform value</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
