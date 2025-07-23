const reviews = [
  {
    id: 1,
    name: "Isabely",
    rating: 5,
    comment: "Gostei muito! Sério kkk",
    avatar: "I",
    color: "bg-pink-500",
    productImage: "/images/bolo-isabely.png",
    productName: "Bolo de Chocolate com Morangos do Amor",
  },
  {
    id: 2,
    name: "Kaue",
    rating: 5,
    comment: "Muito bom, está de parabéns",
    avatar: "K",
    color: "bg-blue-500",
    productImage: "/images/brigadeiros-kaue.png",
    productName: "Caixa com 4 Brigadeiros Gourmet",
  },
  {
    id: 3,
    name: "Ana",
    rating: 5,
    comment:
      "Me deram um pacotinho de Bala Fini de brinde no primeiro pedido escrito 'para adoçar seu dia', ameiiii nota 10!!!",
    avatar: "A",
    color: "bg-purple-500",
    productImage: "/images/brinde-ana.png",
    productName: "Brinde Especial - Bala Fini + Cartão Personalizado",
  },
]

export default function Reviews() {
  return (
    <div className="px-4 mt-6 pb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Avaliações dos Clientes</h3>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-3 p-4 bg-white rounded-lg shadow-sm">
            <div
              className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}
            >
              {review.avatar}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-800">{review.name}</span>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-2">{review.comment}</p>

              {review.productImage && (
                <div className="mt-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-500 mb-2">Produto avaliado:</p>
                    <div className="flex items-center gap-3">
                      <img
                        src={review.productImage || "/placeholder.svg"}
                        alt={review.productName}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-800">{review.productName}</p>
                        <p className="text-xs text-gray-500">Benta Doçaria</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
