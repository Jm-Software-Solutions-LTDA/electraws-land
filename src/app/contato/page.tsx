import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Entre em Contato</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Solicite um orçamento gratuito ou agende uma visita técnica agora mesmo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Informações de Contato */}
          <div>
            <div className="bg-primary text-white p-8 rounded-3xl mb-8">
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-gray-300">(48) 9621-1699</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-bold">E-mail</p>
                    <p className="text-gray-300">contato@electraws.com.br</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl">⏰</span>
                  <div>
                    <p className="font-bold">Horário de Atendimento</p>
                    <p className="text-gray-300">Segunda a Sábado: 08:00 - 18:00</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                 <Link 
                    href="https://wa.me/5548996211699" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 w-full text-center py-4 rounded-xl font-bold block transition-colors"
                  >
                    Chamar no WhatsApp Agora
                 </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border">
               <h3 className="text-xl font-bold text-primary mb-4">Área de Cobertura</h3>
               <p className="text-gray-600 mb-4">Atendemos toda a Grande Florianópolis, incluindo:</p>
               <ul className="grid grid-cols-2 gap-2 text-gray-700 font-medium">
                  <li>• Florianópolis</li>
                  <li>• São José</li>
                  <li>• Palhoça</li>
                  <li>• Biguaçu</li>
               </ul>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white p-8 border rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Enviar Mensagem</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none" placeholder="Seu nome" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp / Telefone</label>
                  <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none" placeholder="(48) 9621-1699" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Cidade / Bairro</label>
                  <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none" placeholder="Ex: São José / Kobrasol" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Eletrodoméstico</label>
                <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none appearance-none bg-white">
                   <option>Selecione o aparelho</option>
                   <option>Geladeira</option>
                   <option>Máquina de Lavar</option>
                   <option>Lava e Seca</option>
                   <option>Micro-ondas</option>
                   <option>Freezer</option>
                   <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Descrição do Problema</label>
                <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-secondary outline-none h-32" placeholder="Descreva brevemente o que está acontecendo..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition-colors shadow-lg">
                Enviar Solicitação
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">
                Respondemos o mais rápido possível no WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
