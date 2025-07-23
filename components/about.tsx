import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Clock, Users } from "lucide-react"

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre a Doce Encanto</h2>
            <p className="text-lg text-gray-600 mb-6">
              Há mais de 10 anos criando momentos doces e especiais para nossa cidade. Nossa confeitaria nasceu do amor
              pela arte de confeitaria e do desejo de levar felicidade através dos nossos doces artesanais.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Utilizamos apenas ingredientes selecionados e receitas tradicionais, combinadas com técnicas modernas para
              criar doces únicos e irresistíveis.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Feito com Amor</h4>
                  <p className="text-sm text-gray-600">Cada doce é preparado com carinho</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Award className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Qualidade Premium</h4>
                  <p className="text-sm text-gray-600">Ingredientes selecionados</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sempre Frescos</h4>
                  <p className="text-sm text-gray-600">Produção diária</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">+5000 Clientes</h4>
                  <p className="text-sm text-gray-600">Satisfeitos e felizes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Nossa cozinha"
                className="w-full h-96 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Nossa Cozinha</h3>
                <p className="text-gray-600">
                  Um ambiente limpo, organizado e cheio de amor, onde cada doce ganha vida.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
