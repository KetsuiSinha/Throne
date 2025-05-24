"use client"

import { useEffect, useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend
} from "recharts"

const data = [
  { name: "Jan", Netflix: 499, Spotify: 119, Amazon: 125, Hotstar: 299 },
  { name: "Feb", Netflix: 499, Spotify: 119, Amazon: 125, Hotstar: 299 },
  { name: "Mar", Netflix: 499, Spotify: 119, Amazon: 125, Hotstar: 299 },
  { name: "Apr", Netflix: 499, Spotify: 119, Amazon: 125, Hotstar: 299 },
  { name: "May", Netflix: 499, Spotify: 119, Amazon: 125, Hotstar: 299 },
  { name: "Jun", Netflix: 499, Spotify: 119, Amazon: 125, Hotstar: 0 },
]

const barColors = {
  Netflix: "#dc2626",   // Red-600
  Spotify: "#22c55e",   // Emerald-500 (green)
  Amazon: "#2563eb",    // Blue-600
  Hotstar: "#eab308",   // Yellow-500
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-md shadow-lg border border-gray-200">
        <p className="font-semibold mb-2">{label}</p>
        {payload.map((entry) => (
          <p key={entry.dataKey} className="text-sm" style={{ color: barColors[entry.dataKey] }}>
            {entry.dataKey}: ₹{entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function SpendingChart() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            formatter={(value) => (
              <span style={{ color: barColors[value] || "#000" }}>{value}</span>
            )}
          />
          {Object.entries(barColors).map(([key, color]) => (
            <Bar
              key={key}
              dataKey={key}
              fill={color}
              radius={[6, 6, 0, 0]}
              animationDuration={800}
              animationEasing="ease-out"
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
