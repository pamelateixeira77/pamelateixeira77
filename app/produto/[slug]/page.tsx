"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Plus, Minus, HelpCircle, Calendar, Clock } from "lucide-react"

// SISTEMA DE AGENDAMENTO VÁLIDO PARA TODOS OS PRODUTOS:
// ✅ Produtos Normais: morango-amor-brigadeiro, bolo-personalizado-morango, bombom-uva-mousse-maracuja, caixa-brigadeiros-chocolate
// ✅ Produtos Zero Açúcar: morango-amor-brigadeiro-zero, bolo-diet-personalizado-morango, bombom-uva-mousse-maracuja-zero, caixa-brigadeiros-chocolate-zero

// Dados dos produtos (simulando uma base de dados)
const productsData = {
  "morango-amor-brigadeiro": {
    name: "Morango do Amor + Brigadeiro Tradicional",
    image: "/images/morango-do-amor.jpg",
    originalPrice: "R$ 39,90",
    currentPrice: "R$ 24,90",
    stock: 8,
    description: "Combo perfeito para compartilhar 💕",
    customizations: {
      sabores: {
        title: "Sabores do Brigadeiro:",
        subtitle: "Escolha até 2 opções",
        maxSelections: 2,
        options: [
          "Brigadeiro Tradicional",
          "Brigadeiro de Leite Ninho",
          "Brigadeiro de Nutella",
          "Brigadeiro de Morango",
          "Brigadeiro de Maracujá",
          "Brigadeiro de Coco",
          "Brigadeiro de Café",
          "Brigadeiro de Limão",
        ],
      },
      extras: {
        title: "Extras:",
        subtitle: "Escolha até 3 opções",
        maxSelections: 3,
        options: [
          "Granulado Extra",
          "Chocolate Branco",
          "Castanha do Pará",
          "Amendoim Triturado",
          "Coco Ralado",
          "Morango Picado",
        ],
      },
    },
  },
  "bolo-personalizado-morango": {
    name: "Bolo Personalizado + Morango do Amor",
    image: "/images/bolo-morango.png",
    originalPrice: "R$ 45,90",
    currentPrice: "R$ 29,90",
    stock: 5,
    description: "Escolha seu sabor favorito! 🎂",
    customizations: {
      sabores: {
        title: "Sabor do Bolo:",
        subtitle: "Escolha 1 opção",
        maxSelections: 1,
        options: ["Chocolate", "Baunilha", "Red Velvet", "Cenoura", "Limão", "Coco", "Morango", "Maracujá"],
      },
      recheios: {
        title: "Recheios:",
        subtitle: "Escolha até 2 opções",
        maxSelections: 2,
        options: [
          "Brigadeiro",
          "Doce de Leite",
          "Ganache de Chocolate",
          "Creme de Baunilha",
          "Geleia de Morango",
          "Mousse de Maracujá",
          "Creme de Limão",
        ],
      },
    },
  },
  "bombom-uva-mousse-maracuja": {
    name: "Bombom de Uva + Mousse de Maracujá",
    image: "/images/bombom-uva-mousse.png",
    originalPrice: "R$ 31,90",
    currentPrice: "R$ 25,90",
    stock: 12,
    description: "Sabores tropicais únicos 🌴",
    customizations: {
      sabores: {
        title: "Sabor do Mousse:",
        subtitle: "Escolha 1 opção",
        maxSelections: 1,
        options: ["Maracujá", "Manga", "Coco", "Limão", "Morango", "Chocolate Branco"],
      },
      extras: {
        title: "Extras:",
        subtitle: "Escolha até 2 opções",
        maxSelections: 2,
        options: ["Uvas Extras", "Calda de Frutas", "Granola", "Castanhas", "Coco Ralado", "Chocolate Granulado"],
      },
    },
  },
  "caixa-brigadeiros-chocolate": {
    name: "Caixa com 4 Brigadeiros + Chocolate Cremoso",
    image: "/images/caixa-brigadeiros.jpg",
    originalPrice: "R$ 24,90",
    currentPrice: "R$ 19,90",
    stock: 15,
    description: "Sabores à sua escolha 🍫",
    customizations: {
      sabores: {
        title: "Sabores dos Brigadeiros:",
        subtitle: "Escolha 4 sabores (pode repetir)",
        maxSelections: 4,
        options: [
          "Brigadeiro Tradicional",
          "Brigadeiro de Leite Ninho",
          "Brigadeiro de Nutella",
          "Brigadeiro de Morango",
          "Brigadeiro de Maracujá",
          "Brigadeiro de Coco",
          "Brigadeiro de Café",
          "Brigadeiro de Limão",
          "Brigadeiro de Oreo",
          "Brigadeiro de Amendoim",
        ],
      },
    },
  },
  // Produtos Zero Açúcar
  "morango-amor-brigadeiro-zero": {
    name: "Morango do Amor ZERO + Brigadeiro Tradicional ZERO",
    image: "/images/morango-do-amor.jpg",
    originalPrice: "R$ 39,90",
    currentPrice: "R$ 24,90",
    stock: 6,
    description: "Combo perfeito sem açúcar 💕",
    customizations: {
      sabores: {
        title: "Sabores do Brigadeiro ZERO:",
        subtitle: "Escolha até 2 opções",
        maxSelections: 2,
        options: [
          "Brigadeiro Tradicional ZERO",
          "Brigadeiro de Leite Ninho ZERO",
          "Brigadeiro de Chocolate Diet",
          "Brigadeiro de Morango ZERO",
          "Brigadeiro de Maracujá Diet",
          "Brigadeiro de Coco ZERO",
          "Brigadeiro de Café Diet",
          "Brigadeiro de Limão ZERO",
        ],
      },
      extras: {
        title: "Extras Diet:",
        subtitle: "Escolha até 3 opções",
        maxSelections: 3,
        options: [
          "Granulado Diet",
          "Chocolate Branco ZERO",
          "Castanha do Pará",
          "Amendoim Triturado",
          "Coco Ralado Natural",
          "Morango Picado Fresh",
        ],
      },
    },
  },
  "bolo-diet-personalizado-morango": {
    name: "Bolo Diet + Morango do Amor ZERO",
    image: "/images/bolo-morango.png",
    originalPrice: "R$ 45,90",
    currentPrice: "R$ 29,90",
    stock: 4,
    description: "Escolha seu sabor favorito sem açúcar! 🎂",
    customizations: {
      sabores: {
        title: "Sabor do Bolo Diet:",
        subtitle: "Escolha 1 opção",
        maxSelections: 1,
        options: [
          "Chocolate Diet",
          "Baunilha ZERO",
          "Red Velvet Diet",
          "Cenoura ZERO",
          "Limão Diet",
          "Coco ZERO",
          "Morango Diet",
          "Maracujá ZERO",
        ],
      },
      recheios: {
        title: "Recheios Diet:",
        subtitle: "Escolha até 2 opções",
        maxSelections: 2,
        options: [
          "Brigadeiro ZERO",
          "Doce de Leite Diet",
          "Ganache de Chocolate ZERO",
          "Creme de Baunilha Diet",
          "Geleia de Morango ZERO",
          "Mousse de Maracujá Diet",
          "Creme de Limão ZERO",
        ],
      },
    },
  },
  "bombom-uva-mousse-maracuja-zero": {
    name: "Bombom de Uva ZERO + Mousse de Maracujá Diet",
    image: "/images/bombom-uva-mousse.png",
    originalPrice: "R$ 31,90",
    currentPrice: "R$ 25,90",
    stock: 10,
    description: "Sabores tropicais sem açúcar 🌴",
    customizations: {
      sabores: {
        title: "Sabor do Mousse Diet:",
        subtitle: "Escolha 1 opção",
        maxSelections: 1,
        options: ["Maracujá Diet", "Manga ZERO", "Coco Diet", "Limão ZERO", "Morango Diet", "Chocolate Branco ZERO"],
      },
      extras: {
        title: "Extras Diet:",
        subtitle: "Escolha até 2 opções",
        maxSelections: 2,
        options: [
          "Uvas Extras",
          "Calda de Frutas ZERO",
          "Granola Diet",
          "Castanhas",
          "Coco Ralado Natural",
          "Chocolate Granulado ZERO",
        ],
      },
    },
  },
  "caixa-brigadeiros-chocolate-zero": {
    name: "Caixa com 4 Brigadeiros Diet + Chocolate Cremoso ZERO",
    image: "/images/caixa-brigadeiros.jpg",
    originalPrice: "R$ 24,90",
    currentPrice: "R$ 19,90",
    stock: 12,
    description: "Sabores diet à sua escolha 🍫",
    customizations: {
      sabores: {
        title: "Sabores dos Brigadeiros Diet:",
        subtitle: "Escolha 4 sabores (pode repetir)",
        maxSelections: 4,
        options: [
          "Brigadeiro Tradicional ZERO",
          "Brigadeiro de Leite Ninho Diet",
          "Brigadeiro de Chocolate ZERO",
          "Brigadeiro de Morango Diet",
          "Brigadeiro de Maracujá ZERO",
          "Brigadeiro de Coco Diet",
          "Brigadeiro de Café ZERO",
          "Brigadeiro de Limão Diet",
          "Brigadeiro de Oreo ZERO",
          "Brigadeiro de Amendoim Diet",
        ],
      },
    },
  },
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter()
  const [product, setProduct] = useState<any>(null)
  const [selections, setSelections] = useState<Record<string, Record<string, number>>>({})
  const [totalPrice, setTotalPrice] = useState(0)
  const [showDeliveryModal, setShowDeliveryModal] = useState(false)
  const [showScheduleModal, setShowScheduleModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  // Gerar horários das 08h às 22h
  const timeSlots = []
  for (let hour = 8; hour <= 22; hour++) {
    timeSlots.push(`${hour.toString().padStart(2, "0")}:00`)
    if (hour < 22) {
      timeSlots.push(`${hour.toString().padStart(2, "0")}:30`)
    }
  }

  useEffect(() => {
    const productData = productsData[params.slug as keyof typeof productsData]
    if (productData) {
      setProduct(productData)
      // Inicializar seleções
      const initialSelections: Record<string, Record<string, number>> = {}
      Object.keys(productData.customizations).forEach((category) => {
        initialSelections[category] = {}
        productData.customizations[category].options.forEach((option: string) => {
          initialSelections[category][option] = 0
        })
      })
      setSelections(initialSelections)

      // Definir preço inicial
      const price = Number.parseFloat(productData.currentPrice.replace("R$ ", "").replace(",", "."))
      setTotalPrice(price)
    }
  }, [params.slug])

  const updateSelection = (category: string, option: string, change: number) => {
    const newSelections = { ...selections }
    const currentCount = newSelections[category][option] || 0
    const newCount = Math.max(0, currentCount + change)

    // Verificar limite máximo
    const categoryData = product.customizations[category]
    const totalSelected = Object.values(newSelections[category]).reduce((sum: number, count: number) => sum + count, 0)

    if (change > 0 && totalSelected >= categoryData.maxSelections) {
      return // Não permite adicionar mais
    }

    newSelections[category][option] = newCount
    setSelections(newSelections)
  }

  const getTotalSelections = (category: string) => {
    return Object.values(selections[category] || {}).reduce((sum: number, count: number) => sum + count, 0)
  }

  const handleFinalizePedido = () => {
    setShowDeliveryModal(true)
  }

  const handleDeliveryChoice = (deliverNow: boolean) => {
    // Verificar produtos específicos com links externos
    if (params.slug === "morango-amor-brigadeiro" || params.slug === "morango-amor-brigadeiro-zero") {
      // Morango do Amor + Brigadeiro (normal e zero)
      window.open("https://go.paradisepagbr.com/seofz2xm8r", "_blank")
      setShowDeliveryModal(false)
      return
    }

    if (params.slug === "bolo-personalizado-morango" || params.slug === "bolo-diet-personalizado-morango") {
      // Bolo + Morango do Amor (normal e zero)
      window.open("https://go.paradisepagbr.com/vyuyg", "_blank")
      setShowDeliveryModal(false)
      return
    }

    if (params.slug === "bombom-uva-mousse-maracuja" || params.slug === "bombom-uva-mousse-maracuja-zero") {
      // Bombom de Uva + Mousse (normal e zero)
      window.open("https://go.paradisepagbr.com/63lk4", "_blank")
      setShowDeliveryModal(false)
      return
    }

    if (params.slug === "caixa-brigadeiros-chocolate" || params.slug === "caixa-brigadeiros-chocolate-zero") {
      // Caixa de Brigadeiros + Chocolate (normal e zero)
      window.open("https://go.paradisepagbr.com/uupeg", "_blank")
      setShowDeliveryModal(false)
      return
    }

    if (deliverNow) {
      // Entrega imediata para outros produtos
      const selectedItems = Object.entries(selections)
        .map(([category, items]) => {
          const selected = Object.entries(items).filter(([_, count]) => count > 0)
          return { category, selected }
        })
        .filter((item) => item.selected.length > 0)

      console.log("Pedido finalizado:", {
        product: product.name,
        selections: selectedItems,
        total: totalPrice,
        delivery: "Entrega Imediata",
      })

      alert(
        `Pedido confirmado!\nProduto: ${product.name}\nTotal: R$ ${totalPrice.toFixed(2).replace(".", ",")}\nTipo: Entrega Imediata`,
      )
      setShowDeliveryModal(false)
    } else {
      // Agendar entrega para outros produtos
      setShowDeliveryModal(false)
      setShowScheduleModal(true)
    }
  }

  const handleScheduleDelivery = () => {
    if (!selectedDate || !selectedTime) {
      alert("Por favor, selecione uma data e horário!")
      return
    }

    // Validar se a data não é no passado
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`)
    const now = new Date()

    if (selectedDateTime < now) {
      alert("Não é possível agendar para uma data/hora no passado!")
      return
    }

    // Verificar produtos específicos com links externos
    if (params.slug === "morango-amor-brigadeiro" || params.slug === "morango-amor-brigadeiro-zero") {
      // Morango do Amor + Brigadeiro (normal e zero)
      window.open("https://go.paradisepagbr.com/seofz2xm8r", "_blank")
      setShowScheduleModal(false)
      return
    }

    if (params.slug === "bolo-personalizado-morango" || params.slug === "bolo-diet-personalizado-morango") {
      // Bolo + Morango do Amor (normal e zero)
      window.open("https://go.paradisepagbr.com/vyuygfa", "_blank")
      setShowScheduleModal(false)
      return
    }

    if (params.slug === "bombom-uva-mousse-maracuja" || params.slug === "bombom-uva-mousse-maracuja-zero") {
      // Bombom de Uva + Mousse (normal e zero)
      window.open("https://go.paradisepagbr.com/63lk4", "_blank")
      setShowScheduleModal(false)
      return
    }

    if (params.slug === "caixa-brigadeiros-chocolate" || params.slug === "caixa-brigadeiros-chocolate-zero") {
      // Caixa de Brigadeiros + Chocolate (normal e zero)
      window.open("https://go.paradisepagbr.com/uupeg", "_blank")
      setShowScheduleModal(false)
      return
    }

    // Para outros produtos, manter comportamento atual
    const selectedItems = Object.entries(selections)
      .map(([category, items]) => {
        const selected = Object.entries(items).filter(([_, count]) => count > 0)
        return { category, selected }
      })
      .filter((item) => item.selected.length > 0)

    console.log("Pedido agendado:", {
      product: product.name,
      selections: selectedItems,
      total: totalPrice,
      delivery: "Entrega Agendada",
      date: selectedDate,
      time: selectedTime,
    })

    // Formatar data para exibição brasileira
    const [year, month, day] = selectedDate.split("-")
    const formattedDate = `${day}/${month}/${year}`

    alert(
      `✅ Pedido agendado com sucesso!\n\n🧁 Produto: ${product.name}\n💰 Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}\n📅 Data: ${formattedDate}\n⏰ Horário: ${selectedTime}\n\n📱 Em breve entraremos em contato para confirmar!`,
    )
    setShowScheduleModal(false)
  }

  // Função para obter data mínima (hoje)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Produto não encontrado</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft className="w-4 h-4" />
          VOLTAR
        </Button>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-md">
        {/* Produto Principal */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h1 className="font-bold text-lg text-gray-800 mb-1">{product.name}</h1>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">{product.currentPrice}</span>
                  <Badge variant="destructive" className="text-xs">
                    Apenas {product.stock} disponível
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customizações */}
        {Object.entries(product.customizations).map(([categoryKey, categoryData]: [string, any]) => (
          <Card key={categoryKey} className="mb-4">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800">{categoryData.title}</h3>
                  <p className="text-sm text-gray-600">{categoryData.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {getTotalSelections(categoryKey)}/{categoryData.maxSelections}
                  </span>
                  {getTotalSelections(categoryKey) >= categoryData.maxSelections && (
                    <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">✓</span>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                {categoryData.options.map((option: string) => (
                  <div key={option} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{option}</span>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateSelection(categoryKey, option, -1)}
                        disabled={!selections[categoryKey]?.[option]}
                        className="w-8 h-8 p-0"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center text-sm font-medium">
                        {selections[categoryKey]?.[option] || 0}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateSelection(categoryKey, option, 1)}
                        disabled={
                          getTotalSelections(categoryKey) >= categoryData.maxSelections &&
                          !selections[categoryKey]?.[option]
                        }
                        className="w-8 h-8 p-0"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="container mx-auto max-w-md flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total:</p>
              <p className="text-xl font-bold text-green-600">R$ {totalPrice.toFixed(2).replace(".", ",")}</p>
            </div>
            <Button onClick={handleFinalizePedido} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
              FINALIZAR PEDIDO
            </Button>
          </div>
        </div>

        {/* Modal de Escolha de Entrega */}
        <Dialog open={showDeliveryModal} onOpenChange={setShowDeliveryModal}>
          <DialogContent className="max-w-xs mx-auto p-0 overflow-hidden border-0">
            <div className="bg-white p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>

              <h2 className="text-lg font-bold text-gray-800 mb-4">Deseja que entregamos agora?</h2>

              <div className="space-y-2">
                <Button
                  onClick={() => handleDeliveryChoice(true)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 text-sm"
                >
                  Sim, por favor!
                </Button>

                <Button
                  onClick={() => handleDeliveryChoice(false)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 text-sm"
                >
                  Não, quero agendar a entrega!
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal de Agendamento */}
        <Dialog open={showScheduleModal} onOpenChange={setShowScheduleModal}>
          <DialogContent className="max-w-sm mx-auto p-0 overflow-hidden border-0">
            <div className="bg-white p-6 text-center">
              <h2 className="text-lg font-bold text-gray-800 mb-2">Selecione o dia e a hora, por gentileza!</h2>
              <p className="text-sm text-gray-600 mb-6">Deixe seu pedido agendado e receba na hora combinada.</p>

              <div className="space-y-4">
                {/* Seletor de Data */}
                <div className="relative">
                  <Input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={getMinDate()}
                    className="w-full pl-10"
                  />
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>

                {/* Seletor de Horário */}
                <div className="relative">
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Selecione o horário</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>

                <Button
                  onClick={handleScheduleDelivery}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3"
                  disabled={!selectedDate || !selectedTime}
                >
                  Agendar pedido!
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Espaço para o footer fixo */}
        <div className="h-20"></div>
      </div>
    </div>
  )
}
