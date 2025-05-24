import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CouponsList } from "@/components/Dashboard/components/CouponsList"

export default function MarketplacePage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-800">🎟 Coupon Marketplace</h2>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Sell a Coupon</Button>
      </div>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search coupons..."
          className="max-w-sm border border-slate-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-500"
        />
      </div>

      <Tabs defaultValue="browse" className="space-y-6">
        <TabsList className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden">
          {["browse", "my-coupons", "transactions"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white px-4 py-2 text-slate-700"
            >
              {tab === "browse"
                ? "Browse"
                : tab === "my-coupons"
                ? "My Coupons"
                : "Transactions"}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="browse" className="space-y-6">
          <div className="flex flex-wrap gap-3 mb-6">
            {["All", "GPay", "Paytm", "Amazon", "Food", "Travel", "Entertainment"].map((label) => (
              <Badge
                key={label}
                variant="outline"
                className="cursor-pointer border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-500 transition-colors"
              >
                {label}
              </Badge>
            ))}
          </div>
          <CouponsList />
        </TabsContent>

        <TabsContent value="my-coupons" className="space-y-6">
          <Card className="bg-white border border-slate-200 shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-800">My Coupons</CardTitle>
              <CardDescription>Coupons you've listed for sale</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-slate-500 mb-4">You haven't listed any coupons yet</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Sell a Coupon</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-6">
          <Card className="bg-white border border-slate-200 shadow-md rounded-2xl">
            <CardHeader>
              <CardTitle className="text-slate-800">Transaction History</CardTitle>
              <CardDescription>Your coupon buying and selling history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-slate-500 mb-4">You don't have any transactions yet</p>
                <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                  Browse Marketplace
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
