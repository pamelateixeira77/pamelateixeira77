"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, AlertTriangle, X, CheckCircle } from "lucide-react"

interface Notification {
  id: string
  type: "purchase" | "stock" | "review"
  message: string
  product?: string
  customerName?: string
  location?: string
  time?: string
  urgent?: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "purchase",
    message: "acabou de comprar",
    product: "Morango do Amor + Brigadeiro Tradicional",
    customerName: "Maria Silva",
    location: "São Bernardo do Campo",
    time: "2 min atrás",
  },
  {
    id: "2",
    type: "stock",
    message: "Restam apenas 3 unidades!",
    product: "Bolo Personalizado + Morango do Amor",
    urgent: true,
  },
  {
    id: "3",
    type: "purchase",
    message: "acabou de comprar",
    product: "Bombom de Uva + Mousse de Maracujá",
    customerName: "João Santos",
    location: "Santo André",
    time: "5 min atrás",
  },
  {
    id: "4",
    type: "stock",
    message: "Estoque baixo - apenas 2 restantes!",
    product: "Caixa com 4 Brigadeiros + Chocolate Cremoso",
    urgent: true,
  },
  {
    id: "5",
    type: "purchase",
    message: "acabou de comprar",
    product: "Morango do Amor ZERO + Brigadeiro ZERO",
    customerName: "Ana Costa",
    location: "Diadema",
    time: "1 min atrás",
  },
  {
    id: "6",
    type: "review",
    message: "avaliou com 5 estrelas",
    product: "Bolo Diet + Morango do Amor ZERO",
    customerName: "Carlos Oliveira",
    time: "3 min atrás",
  },
  {
    id: "7",
    type: "stock",
    message: "Últimas 4 unidades disponíveis!",
    product: "Bombom de Uva ZERO + Mousse Diet",
    urgent: true,
  },
  {
    id: "8",
    type: "purchase",
    message: "acabou de comprar",
    product: "4 Brigadeiros Diet + Chocolate ZERO",
    customerName: "Fernanda Lima",
    location: "São Caetano",
    time: "4 min atrás",
  },
  {
    id: "9",
    type: "review",
    message: "avaliou com 5 estrelas",
    product: "Morango do Amor + Brigadeiro Tradicional",
    customerName: "Roberto Mendes",
    time: "6 min atrás",
  },
  {
    id: "10",
    type: "stock",
    message: "Apenas 1 unidade restante!",
    product: "Caixa com 4 Brigadeiros Diet + Chocolate ZERO",
    urgent: true,
  },
  {
    id: "11",
    type: "purchase",
    message: "acabou de comprar",
    product: "Bolo Personalizado + Morango do Amor",
    customerName: "Juliana Rocha",
    location: "São Bernardo do Campo",
    time: "7 min atrás",
  },
  {
    id: "12",
    type: "review",
    message: "avaliou com 5 estrelas",
    product: "Bombom de Uva + Mousse de Maracujá",
    customerName: "Pedro Alves",
    time: "8 min atrás",
  },
]

export default function SocialProofNotifications() {
  const [activeNotifications, setActiveNotifications] = useState<Notification[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const showNotification = () => {
      const notification = notifications[currentIndex]

      setActiveNotifications((prev) => [...prev, notification])

      // Remove notification after 6 seconds
      setTimeout(() => {
        setActiveNotifications((prev) => prev.filter((n) => n.id !== notification.id))
      }, 6000)

      setCurrentIndex((prev) => (prev + 1) % notifications.length)
    }

    // Show first notification after 5 seconds
    const initialTimer = setTimeout(showNotification, 5000)

    // Then show notifications every 8-15 seconds
    const interval = setInterval(
      () => {
        showNotification()
      },
      Math.random() * 7000 + 8000,
    ) // Random between 8-15 seconds

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [currentIndex])

  const removeNotification = (id: string) => {
    setActiveNotifications((prev) => prev.filter((n) => n.id !== id))
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "purchase":
        return <ShoppingCart className="w-5 h-5 text-green-600" />
      case "stock":
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      case "review":
        return <CheckCircle className="w-5 h-5 text-blue-600" />
      default:
        return <ShoppingCart className="w-5 h-5 text-green-600" />
    }
  }

  const getNotificationColor = (type: string, urgent?: boolean) => {
    if (urgent) return "border-l-red-500 bg-red-50"
    switch (type) {
      case "purchase":
        return "border-l-green-500 bg-green-50"
      case "stock":
        return "border-l-orange-500 bg-orange-50"
      case "review":
        return "border-l-blue-500 bg-blue-50"
      default:
        return "border-l-green-500 bg-green-50"
    }
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 space-y-2 max-w-sm">
      {activeNotifications.map((notification) => (
        <Card
          key={notification.id}
          className={`p-4 shadow-lg border-l-4 ${getNotificationColor(
            notification.type,
            notification.urgent,
          )} animate-in slide-in-from-left duration-500`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              {getNotificationIcon(notification.type)}

              <div className="flex-1 min-w-0">
                {notification.type === "purchase" && (
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      <span className="font-semibold">{notification.customerName}</span> {notification.message}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 font-medium">{notification.product}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        📍 {notification.location}
                      </Badge>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                )}

                {notification.type === "stock" && (
                  <div>
                    <p className="text-sm font-medium text-gray-800 flex items-center gap-1">
                      {notification.urgent && <span className="text-red-500">🔥</span>}
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 font-medium">{notification.product}</p>
                    {notification.urgent && (
                      <Badge variant="destructive" className="text-xs mt-1">
                        URGENTE
                      </Badge>
                    )}
                  </div>
                )}

                {notification.type === "review" && (
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      <span className="font-semibold">{notification.customerName}</span> {notification.message}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 font-medium">{notification.product}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </Card>
      ))}
    </div>
  )
}
