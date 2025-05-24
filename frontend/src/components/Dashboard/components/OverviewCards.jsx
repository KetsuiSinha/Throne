import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ArrowDown,
  ArrowUp,
  CreditCard,
  Package2,
  ShoppingBag,
} from "lucide-react"

export function OverviewCards() {
  const cards = [
    {
      title: "Total Spend",
      icon: <CreditCard className="h-5 w-5 text-muted-foreground" />,
      value: "₹2,416",
      trend: "+12.5%",
      trendIcon: <ArrowUp className="h-3 w-3" />,
      trendColor: "text-red-600",
      note: "from last month",
    },
    {
      title: "Active Subscriptions",
      icon: <Package2 className="h-5 w-5 text-muted-foreground" />,
      value: "4",
      trend: "-1",
      trendIcon: <ArrowDown className="h-3 w-3" />,
      trendColor: "text-green-600",
      note: "from last month",
    },
    {
      title: "Coupons Sold",
      icon: <ShoppingBag className="h-5 w-5 text-muted-foreground" />,
      value: "3",
      trend: "+2",
      trendIcon: <ArrowUp className="h-3 w-3" />,
      trendColor: "text-green-600",
      note: "from last month",
    },
    {
      title: "ThroneCoins",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-5 w-5 text-muted-foreground"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      value: "250",
      trend: "+50",
      trendIcon: <ArrowUp className="h-3 w-3" />,
      trendColor: "text-green-600",
      note: "from last month",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          className="rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-md"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-700">
              {card.title}
            </CardTitle>
            {card.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{card.value}</div>
            <p className="mt-1 text-xs text-muted-foreground">
              <span className={`flex items-center gap-1 ${card.trendColor}`}>
                {card.trendIcon}
                {card.trend}
              </span>{" "}
              {card.note}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
