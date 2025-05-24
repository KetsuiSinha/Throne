import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: 1,
    type: "deposit",
    title: "Added funds",
    amount: "+₹1,000",
    date: "May 15, 2025",
    status: "completed",
  },
  {
    id: 2,
    type: "withdrawal",
    title: "Withdrawal to bank",
    amount: "-₹500",
    date: "May 10, 2025",
    status: "completed",
  },
  {
    id: 3,
    type: "coupon_sold",
    title: "Amazon coupon sold",
    amount: "+₹400",
    date: "May 5, 2025",
    status: "completed",
  },
  {
    id: 4,
    type: "subscription_payment",
    title: "Netflix payment",
    amount: "-₹499",
    date: "May 1, 2025",
    status: "completed",
  },
  {
    id: 5,
    type: "coupon_purchase",
    title: "Swiggy coupon purchase",
    amount: "-₹120",
    date: "Apr 28, 2025",
    status: "completed",
  },
]

const typeStyles = {
  deposit: "bg-emerald-100 text-emerald-600",
  withdrawal: "bg-red-100 text-red-600",
  coupon_sold: "bg-blue-100 text-blue-600",
  subscription_payment: "bg-purple-100 text-purple-600",
  coupon_purchase: "bg-yellow-100 text-yellow-600",
}

const typeFallbackText = {
  deposit: "+",
  withdrawal: "-",
  coupon_sold: "CS",
  subscription_payment: "SP",
  coupon_purchase: "CP",
}

export function TransactionHistory() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between gap-4 rounded-lg border p-4"
          aria-label={`${transaction.title} on ${transaction.date}`}
        >
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback className={typeStyles[transaction.type] || ""}>
                {typeFallbackText[transaction.type] || "TX"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{transaction.title}</p>
              <p className="text-sm text-muted-foreground">{transaction.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p
              className={`font-medium ${
                transaction.amount.startsWith("+") ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {transaction.amount}
            </p>
            <Badge variant="outline" className="capitalize">
              {transaction.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
