import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Gift, Percent } from "lucide-react"

export default function Promotions() {
  return (
    <section id="promocoes" className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Promoções Especiais</h2>
          <p className="text-xl text-gray-600">Aproveite nossas ofertas imperdíveis!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Promoção 1 */}
          <Card className="relative overflow-hidden border-2 border-pink-200 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-pink-600 text-white px-4 py-2 rounded-bl-lg">
              <Badge className="bg-transparent text-white border-0">OFERTA</Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Gift className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Compre 1 Leve 2</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Na compra de qualquer bolo, ganhe 2 cupcakes grátis! Válido para pedidos acima de R$ 40.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-pink-600" />
                <span className="text-sm text-gray-500">Válido até 31/12</span>
              </div>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Aproveitar Oferta</Button>
            </CardContent>
          </Card>

          {/* Promoção 2 */}
          <Card className="relative overflow-hidden border-2 border-purple-200 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 rounded-bl-lg">
              <Badge className="bg-transparent text-white border-0">20% OFF</Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Percent className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Desconto Primeira Compra</h3>
              </div>
              <p className="text-gray-600 mb-4">
                20% de desconto na sua primeira compra! Use o cupom BEMVINDO20 no checkout.
              </p>
              <div className="bg-gray-100 p-3 rounded-lg mb-4">
                <code className="text-purple-600 font-mono font-bold">BEMVINDO20</code>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Usar Cupom</Button>
            </CardContent>
          </Card>

          {/* Promoção 3 */}
          <Card className="relative overflow-hidden border-2 border-yellow-200 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-2 rounded-bl-lg">
              <Badge className="bg-transparent text-white border-0">FRETE GRÁTIS</Badge>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Entrega Gratuita</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Frete grátis para pedidos acima de R$ 50,00 em toda a cidade. Entrega rápida e segura!
              </p>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-yellow-600" />
                <span className="text-sm text-gray-500">Entrega em até 45min</span>
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">Fazer Pedido</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
