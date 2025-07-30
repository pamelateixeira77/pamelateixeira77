"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Instagram, Info, X } from "lucide-react"

export default function Header() {
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false)

  return (
    <div className="relative mx-4 mt-4 rounded-t-3xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/benta-banner.png')",
        }}
      />

      {/* Overlay mais suave para destacar a logo */}
      <div className="absolute inset-0 bg-black/25 rounded-t-3xl" />

      {/* Content */}
      <div className="relative z-10 p-6">
        <Badge className="absolute top-4 left-4 bg-green-600 text-white shadow-lg">ABERTO</Badge>

        <div className="text-center pt-6">
          {/* Logo da Benta Doçaria - Redonda sem fundo branco */}
          <div className="w-28 h-28 mx-auto mb-3 flex items-center justify-center">
            <img
              src="/images/benta-logo.png"
              alt="Benta Doçaria Logo"
              className="w-full h-full object-cover rounded-full shadow-2xl border-2 border-white/40"
              style={{
                filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.6))",
              }}
            />
          </div>

          {/* Nome da doçaria */}
          <h1 className="text-xl font-bold text-white mb-3 drop-shadow-2xl">Benta Doçaria</h1>

          {/* Botões do Instagram e Informações de Entrega */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <button
              onClick={() => window.open("https://www.instagram.com/bentadocaria/", "_blank")}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 shadow-lg hover:bg-white transition-all duration-200 hover:scale-105"
              aria-label="Seguir no Instagram"
            >
              <Instagram className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-medium text-sm">@bentadocaria</span>
            </button>

            <button
              onClick={() => setShowDeliveryInfo(true)}
              className="inline-flex items-center justify-center bg-white/90 backdrop-blur-md border border-white/30 rounded-full w-10 h-10 shadow-lg hover:bg-white transition-all duration-200 hover:scale-105"
              aria-label="Informações de Entrega"
            >
              <Info className="w-4 h-4 text-purple-600" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/95 mb-2">
            <span className="bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30">
              📦 Pedido Mínimo R$ 15,00
            </span>
            <span className="bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30">
              🕐 30-50 min
            </span>
            <span className="text-green-300 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/30">
              • Grátis
            </span>
          </div>

          <div className="text-sm text-white/95 mb-2 bg-white/20 inline-block px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30">
            📍 Santo André - SP • 1,8km de você
          </div>

          <div className="flex items-center justify-center gap-1 bg-white/20 inline-block px-4 py-1.5 rounded-full backdrop-blur-md border border-white/30">
            <span className="text-lg">⭐</span>
            <span className="font-semibold text-white">4,9</span>
            <span className="text-white/95">(246 avaliações)</span>
          </div>
        </div>
      </div>

      {/* Modal de Informações de Entrega */}
      <Dialog open={showDeliveryInfo} onOpenChange={setShowDeliveryInfo}>
        <DialogContent className="max-w-sm mx-auto p-0 overflow-hidden border-0">
          <div className="bg-white rounded-lg">
            {/* Header do Modal */}
            <div className="bg-purple-600 text-white p-4 relative">
              <button
                onClick={() => setShowDeliveryInfo(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-lg font-bold text-center">Informações de Entrega</h2>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-4 space-y-4">
              {/* Tipos de Entrega */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">🏍️ Tipos de Entrega</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Entrega Motoboy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Retirada no Local</span>
                  </div>
                </div>
              </div>

              {/* Formas de Pagamento */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">💳 Formas de Pagamento</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-lg text-sm font-medium">PIX</span>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Desculpe!</strong> No momento estamos aceitando apenas pagamentos via PIX. Em breve
                      voltaremos a aceitar cartão e dinheiro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">📍 Endereço</h3>
                <p className="text-sm text-gray-600">Santo André - SP</p>
              </div>

              {/* Áreas de Entrega */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">🚚 Áreas de Entrega</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">Santo André - SP</span>
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">GRÁTIS</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">Entrega gratuita para pedidos acima de R$ 25,00</p>
                </div>
              </div>

              {/* Tempo de Entrega */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">⏰ Tempo de Entrega</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-sm text-blue-800 font-medium">30-50 minutos</p>
                  <p className="text-xs text-blue-600 mt-1">Horário de funcionamento: 8h às 22h</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
