import { Button } from "@/components/ui/button"
import { Star, Clock, Truck } from "lucide-react"

export default function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-pink-100 to-purple-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Os Melhores
              <span className="text-pink-600 block">Doces da Cidade</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bolos artesanais, doces caseiros e sobremesas irresistíveis feitos com muito carinho e ingredientes
              selecionados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-lg px-8 py-3">
                Ver Cardápio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-600 text-pink-600 hover:bg-pink-50 text-lg px-8 py-3 bg-transparent"
              >
                Fazer Pedido
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>4.9/5 estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-pink-600" />
                <span>Entrega em 45min</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-pink-600" />
                <span>Frete grátis acima de R$ 50</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Bolo decorado com morangos"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-pink-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg">
                -20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
