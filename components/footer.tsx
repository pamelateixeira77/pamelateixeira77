import { Heart, Instagram, Facebook, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-pink-400 mb-4">🧁 Doce Encanto</h3>
            <p className="text-gray-300 mb-4">
              Criando momentos doces e especiais há mais de 10 anos. Nossos doces artesanais são feitos com muito amor e
              ingredientes selecionados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#promocoes" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Promoções
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-pink-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@doceencanto.com
              </p>
              <p>Rua das Flores, 123</p>
              <p>Centro - São Paulo/SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center gap-2">
            © 2024 Doce Encanto. Feito com <Heart className="w-4 h-4 text-pink-400 fill-current" /> para você.
          </p>
        </div>
      </div>
    </footer>
  )
}
