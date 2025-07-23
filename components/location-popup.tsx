"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Truck, Clock, X } from "lucide-react"

export default function LocationPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [userCity, setUserCity] = useState("São Bernardo do Campo")

  useEffect(() => {
    // Simula detecção de localização ou pode usar geolocalização real
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000) // Aparece após 2 segundos

    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleViewMenu = () => {
    setIsOpen(false)
    // Scroll para produtos ou redireciona
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-sm mx-auto p-0 overflow-hidden border-0">
        <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white p-6 text-center">
          <button onClick={handleClose} className="absolute top-3 right-3 text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>

          <div className="mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <Badge className="bg-green-500 text-white mb-2">🎉 TEMOS UMA UNIDADE PERTO DE VOCÊ!</Badge>
          </div>

          <h2 className="text-xl font-bold mb-2">Boa notícia!</h2>
          <p className="text-white/90 mb-4">
            A <strong>Benta Doçaria</strong> tem uma unidade a menos de <strong>2km</strong> de {userCity}!
          </p>

          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Truck className="w-5 h-5" />
              <span className="font-semibold">FRETE GRÁTIS</span>
            </div>
            <p className="text-sm text-white/90">Para sua região em pedidos acima de R$ 25,00</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>30-45min</span>
            </div>
            <div className="flex items-center gap-1">
              <span>⭐</span>
              <span>4.9 (246 avaliações)</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleViewMenu}
              className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            >
              Ver Cardápio 🧁
            </Button>

            <Button
              onClick={handleClose}
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent"
            >
              Continuar Navegando
            </Button>
          </div>
        </div>

        <div className="bg-white p-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-purple-600" />
            <div>
              <p className="font-medium text-gray-800">Benta Doçaria - Unidade Centro</p>
              <p>Rua das Flores, 123 - {userCity}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
