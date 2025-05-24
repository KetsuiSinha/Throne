import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const coupons = [
  {
    id: 1,
    name: "GPay Cashback",
    logo: "/placeholder.svg?height=40&width=40",
    value: "₹100",
    price: "₹80",
    expiry: "Jun 30, 2025",
    category: "Payment",
    seller: "user123",
  },
  {
    id: 2,
    name: "Amazon Discount",
    logo: "/placeholder.svg?height=40&width=40",
    value: "₹500",
    price: "₹400",
    expiry: "Jul 15, 2025",
    category: "Shopping",
    seller: "user456",
  },
  {
    id: 3,
    name: "Swiggy Offer",
    logo: "/placeholder.svg?height=40&width=40",
    value: "₹150",
    price: "₹120",
    expiry: "Jun 25, 2025",
    category: "Food",
    seller: "user789",
  },
  {
    id: 4,
    name: "Paytm Cashback",
    logo: "/placeholder.svg?height=40&width=40",
    value: "₹200",
    price: "₹160",
    expiry: "Jul 5, 2025",
    category: "Payment",
    seller: "user321",
  },
  {
    id: 5,
    name: "Zomato Pro",
    logo: "/placeholder.svg?height=40&width=40",
    value: "₹250",
    price: "₹200",
    expiry: "Jun 28, 2025",
    category: "Food",
    seller: "user654",
  },
  {
    id: 6,
    name: "Myntra Voucher",
    logo: "/placeholder.svg?height=40&width=40",
    value: "₹1000",
    price: "₹850",
    expiry: "Jul 20, 2025",
    category: "Shopping",
    seller: "user987",
  },
]

export function CouponsList() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {coupons.map((coupon) => (
        <Card
          key={coupon.id}
          className="rounded-2xl border border-slate-200 bg-white shadow-md transition hover:shadow-lg"
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={coupon.logo} alt={coupon.name} />
                  <AvatarFallback>{coupon.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-slate-800">{coupon.name}</p>
                  <p className="text-xs text-muted-foreground">Sold by: {coupon.seller}</p>
                </div>
              </div>
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                {coupon.category}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Value</p>
                <p className="text-lg font-semibold text-slate-900">{coupon.value}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Price</p>
                <p className="text-lg font-semibold text-emerald-600">{coupon.price}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">Expires on {coupon.expiry}</p>
          </CardContent>

          <CardFooter>
            <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
