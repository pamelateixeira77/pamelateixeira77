import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Bolo de Chocolate Gourmet",
    description: "Bolo de chocolate com recheio de brigadeiro e cobertura de ganache",
    price: "R$ 45,00",
    image: "/placeholder.svg?height=300&width=300",
    category: "Bolos",
    popular: true,
  },
  {
    id: 2,
    name: "Torta de Morango",
    description: "Massa crocante, creme de baunilha e morangos frescos",
    price: "R$ 38,00",
    image: "/placeholder.svg?height=300&width=300",
    category: "Tortas",
  },
  {
    id: 3,
    name: "Cupcakes Variados",
    description: "Kit com 6 cupcakes de sabores variados com cobertura especial",
    price: "R$ 24,00",
    image: "/placeholder.svg?height=300&width=300",
    category: "Cupcakes",
    popular: true,
  },
  {
    id: 4,
    name: "Bolo Red Velvet",
    description: "Clássico bolo americano com cream cheese e toque de cacau",
    price: "R$ 42,00",
    image: "/placeholder.svg?height=300&width=300",
    category: "Bolos",
  },
  {
    id: 5,
    name: "Docinhos Gourmet",
    description: "Seleção de 12 docinhos: brigadeiro, beijinho, cajuzinho",
    price: "R$ 36,00",
    image: "/placeholder.svg?height=300&width=300",
    category: "Docinhos",
  },
  {
    id: 6,
    name: "Cheesecake de Frutas Vermelhas",
    description: "Cremoso cheesecake com calda de frutas vermelhas",
    price: "R$ 35,00",
    image: "/placeholder.svg?height=300&width=300",
    category: "Tortas",
    popular: true,
  },
]

export default function Products() {
  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nossos Produtos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Deliciosos doces artesanais feitos com ingredientes selecionados e muito amor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.popular && <Badge className="absolute top-3 left-3 bg-pink-600">Mais Pedido</Badge>}
                <Badge variant="secondary" className="absolute top-3 right-3">
                  {product.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                  <Button className="bg-pink-600 hover:bg-pink-700">Adicionar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent">
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  )
}
