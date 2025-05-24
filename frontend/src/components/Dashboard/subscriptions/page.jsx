import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SubscriptionsList } from "@/components/Dashboard/components/SubscriptionList"

export default function SubscriptionsPage() {
  return (
    <div className="flex-1 space-y-6 p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold tracking-tight text-emerald-800">📦 Subscriptions</h2>
        <Button className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
          Add Subscription
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Input
          placeholder="Search subscriptions..."
          className="max-w-sm border-slate-300 focus-visible:ring-emerald-500"
        />
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          {["active", "paused", "cancelled", "all"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="px-4 py-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white text-slate-700"
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="active" className="space-y-6">
          <Card className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Active Subscriptions</CardTitle>
              <CardDescription>Manage your current active subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscriptionsList />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="paused" className="space-y-6">
          <Card className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Paused Subscriptions</CardTitle>
              <CardDescription>Subscriptions that are temporarily paused</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-slate-500 mb-4">You don't have any paused subscriptions</p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View All Subscriptions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-6">
          <Card className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">Cancelled Subscriptions</CardTitle>
              <CardDescription>Subscriptions that have been cancelled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-slate-500 mb-4">You don't have any cancelled subscriptions</p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  View All Subscriptions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <Card className="bg-white border border-slate-200 rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-emerald-700">All Subscriptions</CardTitle>
              <CardDescription>View all your subscriptions in one place</CardDescription>
            </CardHeader>
            <CardContent>
              <SubscriptionsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
