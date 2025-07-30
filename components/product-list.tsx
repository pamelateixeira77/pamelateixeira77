"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface ProductListProps {
  activeTab: string
}

const promocaoProducts = [
  {
    id: 1,
    name: "Morango do Amor + Brigadeiro Tradicional",
    complements: "Combo perfeito para compartilhar 💕",
    originalPrice: "R$ 39,90",
    currentPrice: "R$ 24,90",
    image: "/images/morango-do-amor.jpg",
    description: "🍓 Delicioso morango do amor + brigadeiro tradicional cremoso! Perfeito para momentos especiais!",
    slug: "morango-amor-brigadeiro",
    isBestSeller: true,
  },
  {
    id: 2,
    name: "Bolo (Sabor ao seu critério) + Morango do Amor",
    complements: "Escolha seu sabor favorito! 🎂",
    originalPrice: "R$ 45,90",
    currentPrice: "R$ 29,90",
    image: "/images/bolo-morango.png",
    description: "🧁 Bolo fresquinho no sabor que você escolher + morango do amor irresistível! Combinação perfeita!",
    slug: "bolo-personalizado-morango",
  },
  {
    id: 3,
    name: "Bombom de Uva + Copinho de Mousse de Maracujá",
    complements: "Sabores tropicais únicos 🌴",
    originalPrice: "R$ 31,90",
    currentPrice: "R$ 25,90",
    image: "/images/bombom-uva-mousse.png",
    description: "🍇 Bombom de uva especial + mousse de maracujá cremoso! Explosão de sabores tropicais!",
    slug: "bombom-uva-mousse-maracuja",
  },
  {
    id: 4,
    name: "Caixa com 4 Brigadeiros + Chocolate Cremoso",
    complements: "Sabores à sua escolha 🍫",
    originalPrice: "R$ 24,90",
    currentPrice: "R$ 19,90",
    image: "/images/caixa-brigadeiros.jpg",
    description:
      "🍫 4 brigadeiros gourmet no sabor que você escolher + chocolate cremoso de presente! Pura indulgência!",
    slug: "caixa-brigadeiros-chocolate",
    customerChoice: "Ideal para presentear ou se deliciar! 🎁",
  },
]

const zeroProducts = [
  {
    id: 5,
    name: "Morango do Amor ZERO + Brigadeiro Tradicional ZERO",
    complements: "Combo perfeito sem açúcar 💕",
    originalPrice: "R$ 39,90",
    currentPrice: "R$ 24,90",
    image: "/images/morango-do-amor.jpg",
    description:
      "🍓 Delicioso morango do amor ZERO açúcar + brigadeiro tradicional diet! Sabor sem culpa para momentos especiais!",
    slug: "morango-amor-brigadeiro-zero",
    isBestSeller: true,
    isZero: true,
  },
  {
    id: 6,
    name: "Bolo Diet (Sabor ao seu critério) + Morango do Amor ZERO",
    complements: "Escolha seu sabor favorito sem açúcar! 🎂",
    originalPrice: "R$ 45,90",
    currentPrice: "R$ 29,90",
    image: "/images/bolo-morango.png",
    description:
      "🧁 Bolo diet fresquinho no sabor que você escolher + morango do amor ZERO! Combinação perfeita e saudável!",
    slug: "bolo-diet-personalizado-morango",
    isZero: true,
  },
  {
    id: 7,
    name: "Bombom de Uva ZERO + Copinho de Mousse de Maracujá Diet",
    complements: "Sabores tropicais sem açúcar 🌴",
    originalPrice: "R$ 31,90",
    currentPrice: "R$ 25,90",
    image: "/images/bombom-uva-mousse.png",
    description:
      "🍇 Bombom de uva ZERO açúcar + mousse de maracujá diet cremoso! Explosão de sabores tropicais sem culpa!",
    slug: "bombom-uva-mousse-maracuja-zero",
    isZero: true,
  },
  {
    id: 8,
    name: "Caixa com 4 Brigadeiros Diet + Chocolate Cremoso ZERO",
    complements: "Sabores diet à sua escolha 🍫",
    originalPrice: "R$ 24,90",
    currentPrice: "R$ 19,90",
    image: "/images/caixa-brigadeiros.jpg",
    description:
      "🍫 4 brigadeiros diet gourmet no sabor que você escolher + chocolate cremoso ZERO de presente! Pura indulgência saudável!",
    slug: "caixa-brigadeiros-chocolate-zero",
    customerChoice: "Ideal para quem cuida da saúde sem abrir mão do sabor! 🌿",
    isZero: true,
  },
]

export default function ProductList({ activeTab }: ProductListProps) {
  const router = useRouter()
  const products = activeTab === "zero" ? zeroProducts : promocaoProducts
  const sectionTitle = activeTab === "zero" ? "Doces Zero Açúcar" : "Promoções Pague 1, Leve 2"

  const handleProductClick = (slug: string) => {
    router.push(`/produto/${slug}`)
  }

  return (
    <div className="px-4 mt-6 space-y-4" data-section="products">
      <h2 className="text-xl font-bold text-purple-600 mb-4">{sectionTitle}</h2>

      {products.map((product) => (
        <Card key={product.id} className={`${product.isBestSeller ? "border-2 border-green-400" : ""}`}>
          {product.isBestSeller && (
            <div className="bg-green-400 text-center py-2 rounded-t-lg">
              <Badge className="bg-purple-600 text-white">MAIS VENDIDO 💜</Badge>
            </div>
          )}

          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.complements}</p>

                {product.description && (
                  <div className="bg-gray-100 p-2 rounded mb-2">
                    <p className="text-sm text-gray-700">{product.description}</p>
                  </div>
                )}

                {product.customerChoice && (
                  <p className="text-sm text-gray-600 italic mb-2">{product.customerChoice}</p>
                )}

                <div className="flex items-center gap-2 mb-2">
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-gray-500 line-through">de</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </>
                  )}
                </div>

                <div className="flex items-center gap-1 mb-3">
                  <span className="text-sm text-gray-600">por</span>
                  <span className="text-xl font-bold text-green-600">{product.currentPrice}</span>
                </div>

                <Button
                  onClick={() => handleProductClick(product.slug)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium"
                >
                  Ver Detalhes & Pedir 🛒
                </Button>
              </div>

              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                {product.isZero && (
                  <Badge className="absolute -top-2 -right-2 bg-cyan-400 text-black text-xs">ZERO</Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
