"use client"

interface ProductTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function ProductTabs({ activeTab, setActiveTab }: ProductTabsProps) {
  return (
    <div className="px-4 mt-4">
      <div className="bg-purple-600 rounded-lg p-1 flex">
        <button
          onClick={() => setActiveTab("promocao")}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "promocao" ? "bg-white text-purple-600" : "text-white"
          }`}
        >
          Pague 1, Leve 2
        </button>
        <button
          onClick={() => setActiveTab("zero")}
          className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === "zero" ? "bg-white text-purple-600" : "text-white"
          }`}
        >
          Pague 1, Leve 2 - Zero
        </button>
      </div>

      <div className="mt-4 bg-green-100 border border-green-300 rounded-lg p-3">
        <p className="text-green-800 text-center font-medium">Entrega Grátis para São Paulo</p>
      </div>

      {activeTab === "promocao" && (
        <div className="mt-4 bg-purple-100 border border-purple-300 rounded-lg p-3">
          <p className="text-purple-800 text-center">
            Aproveite nossa <strong>promoção especial</strong> - Compre 1 e Leve 2! 💜
          </p>
        </div>
      )}

      {activeTab === "zero" && (
        <div className="mt-4 bg-cyan-100 border border-cyan-300 rounded-lg p-3">
          <p className="text-cyan-800 text-center">
            <strong>Linha Zero Açúcar</strong> - Deliciosos e saudáveis! 🌿
          </p>
        </div>
      )}
    </div>
  )
}
