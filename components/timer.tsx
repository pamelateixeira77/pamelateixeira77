"use client"

import { useState, useEffect } from "react"

export default function Timer() {
  const handleViewPromotions = () => {
    // Scroll suave para a seção de produtos
    const productsSection = document.querySelector('[data-section="products"]')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const [timeLeft, setTimeLeft] = useState({
    minutes: 21,
    seconds: 32,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          return { minutes: 30, seconds: 0 } // Reset timer
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="px-4 mt-6">
      <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
        <p className="text-red-700 text-center font-medium mb-4">A promoção vai acabar em:</p>

        <div className="flex justify-center gap-4">
          <div className="bg-red-600 text-white rounded-lg px-4 py-3 min-w-[60px] text-center">
            <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, "0")}</div>
            <div className="text-xs">Minutos</div>
          </div>

          <div className="bg-red-600 text-white rounded-lg px-4 py-3 min-w-[60px] text-center">
            <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, "0")}</div>
            <div className="text-xs">Segundos</div>
          </div>
        </div>

        <button
          onClick={handleViewPromotions}
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          Clique Para Ver Bolos em Promoção 💜
        </button>
      </div>
    </div>
  )
}
