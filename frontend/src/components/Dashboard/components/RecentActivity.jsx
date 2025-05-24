import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    type: "subscription_renewed",
    title: "Netflix subscription renewed",
    amount: "₹499",
    date: "Today, 10:30 AM",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    type: "coupon_sold",
    title: "Amazon coupon sold",
    amount: "+₹400",
    date: "Yesterday, 3:45 PM",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 3,
    type: "subscription_paused",
    title: "YouTube Premium paused",
    amount: "₹129 saved",
    date: "May 14, 2025",
    icon: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    type: "coupon_purchased",
    title: "Swiggy coupon purchased",
    amount: "-₹120",
    date: "May 12, 2025",
    icon: "/placeholder.svg?height=32&width=32",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-6">
      {activities.map(({ id, type, title, amount, date, icon }) => {
        const isPositive = type === "coupon_sold" || type === "subscription_paused"
        const isNegative = type === "coupon_purchased"
        const amountColor = isPositive ? "text-emerald-600" : isNegative ? "text-red-600" : "text-gray-900"

        const fallbackText = {
          subscription_renewed: "SR",
          coupon_sold: "CS",
          subscription_paused: "SP",
          coupon_purchased: "CP",
        }[type] || "NA"

        return (
          <div key={id} className="flex items-center gap-4 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 transition">
            <Avatar className="mt-1">
              <AvatarImage src={icon || "/placeholder.svg"} alt={title} />
              <AvatarFallback>{fallbackText}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-0.5">
              <p className="text-sm font-medium leading-none">{title}</p>
              <p className="text-xs text-muted-foreground">{date}</p>
            </div>
            <div className={`text-sm font-semibold ${amountColor} min-w-[60px] text-right`}>
              {amount}
            </div>
          </div>
        )
      })}
    </div>
  )
}
