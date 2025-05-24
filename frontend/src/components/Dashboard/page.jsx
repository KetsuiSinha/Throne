import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionsList } from "@/components/Dashboard/components/SubscriptionList"
import { RecentActivity } from "@/components/Dashboard/components/RecentActivity"
import { OverviewCards } from "@/components/Dashboard/components/OverviewCards"
import { SpendingChart } from "@/components/Dashboard/components/SpendingChart"
import SubscriptionsPage from "./subscriptions/page"
import WalletPage from "./wallet/page"
import MarketplacePage from "./marketplace/page"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Throne</h2>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          <TabsTrigger value="wallet">Wallet</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <OverviewCards />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Spending Overview</CardTitle>
                <CardDescription>Your subscription spending over time</CardDescription>
              </CardHeader>
              <CardContent>
                <SpendingChart />
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your recent subscription and coupon activity</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentActivity />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Active Subscriptions</CardTitle>
              <CardDescription>Manage your current subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscriptionsList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-6">
          <SubscriptionsPage />
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <MarketplacePage />
        </TabsContent>

        <TabsContent value="wallet" className="space-y-6">
          <WalletPage />
        </TabsContent>
      </Tabs>
    </div>
  )
}
