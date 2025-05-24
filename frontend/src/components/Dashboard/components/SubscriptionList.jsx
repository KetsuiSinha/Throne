import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const subscriptions = [
  {
    id: 1,
    name: "Netflix",
    logo: "/placeholder.svg?height=40&width=40",
    price: "₹499",
    billingCycle: "Monthly",
    nextBilling: "Jun 15, 2025",
    status: "active",
  },
  {
    id: 2,
    name: "Spotify",
    logo: "/placeholder.svg?height=40&width=40",
    price: "₹119",
    billingCycle: "Monthly",
    nextBilling: "Jun 5, 2025",
    status: "active",
  },
  {
    id: 3,
    name: "Amazon Prime",
    logo: "/placeholder.svg?height=40&width=40",
    price: "₹1,499",
    billingCycle: "Yearly",
    nextBilling: "Dec 10, 2025",
    status: "active",
  },
  {
    id: 4,
    name: "Hotstar",
    logo: "/placeholder.svg?height=40&width=40",
    price: "₹299",
    billingCycle: "Monthly",
    nextBilling: "Jun 22, 2025",
    status: "active",
  },
]

export function SubscriptionsList() {
  return (
    <div className="space-y-4">
      {subscriptions.map((subscription) => (
        <article
          key={subscription.id}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-lg border p-4 hover:bg-emerald-50 focus-within:ring-2 focus-within:ring-emerald-400 transition"
          aria-label={`${subscription.name} subscription`}
          tabIndex={0}
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={subscription.logo || "/placeholder.svg"} alt={subscription.name} />
              <AvatarFallback>{subscription.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-medium">{subscription.name}</p>
                <Badge
                  variant="outline"
                  className={`text-xs ${
                    subscription.status === "active"
                      ? "border-emerald-500 text-emerald-600"
                      : "border-gray-400 text-gray-600"
                  }`}
                >
                  {subscription.status === "active" ? "Active" : "Paused"}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {subscription.price} • {subscription.billingCycle}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <div className="text-sm text-right sm:text-left w-full sm:w-auto">
              <p className="font-medium">Next billing</p>
              <time dateTime={new Date(subscription.nextBilling).toISOString()} className="text-muted-foreground">
                {subscription.nextBilling}
              </time>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto border-emerald-500 text-emerald-600 hover:bg-emerald-100 focus:ring-emerald-400"
                aria-label={`Pause ${subscription.name} subscription`}
              >
                Pause
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto border-emerald-500 text-emerald-600 hover:bg-emerald-100 focus:ring-emerald-400"
                aria-label={`Cancel ${subscription.name} subscription`}
              >
                Cancel
              </Button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
