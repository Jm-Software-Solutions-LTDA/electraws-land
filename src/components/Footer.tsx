import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ElectraWS</h3>
            <p className="text-gray-300">
              5 anos de experiência em manutenção profissional de eletrodomésticos na Grande Florianópolis.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/servicos/conserto-geladeira-grande-florianopolis" className="hover:text-white transition-colors">Geladeiras</Link></li>
              <li><Link href="/servicos/conserto-maquina-de-lavar-grande-florianopolis" className="hover:text-white transition-colors">Máquinas de Lavar</Link></li>
              <li><Link href="/servicos/conserto-micro-ondas-grande-florianopolis" className="hover:text-white transition-colors">Micro-ondas</Link></li>
              <li><Link href="/servicos" className="hover:text-white transition-colors">Ver todos</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Cidades</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/regiao/florianopolis" className="hover:text-white transition-colors">Florianópolis</Link></li>
              <li><Link href="/regiao/sao-jose-sc" className="hover:text-white transition-colors">São José</Link></li>
              <li><Link href="/regiao/palhoca" className="hover:text-white transition-colors">Palhoça</Link></li>
              <li><Link href="/regiao/biguacu" className="hover:text-white transition-colors">Biguaçu</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>(48) 9621-1699</li>
              <li>contato@electraws.com.br</li>
              <li>Segunda a Sábado: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
          <p>&copy; {currentYear} ElectraWS - Todos os direitos reservados. Conserto de Eletrodomésticos na Grande Florianópolis.</p>
          <p className="mt-2">Desenvolvido por Jm Software Solutions LTDA - CNPJ 55.995.404/0001-54</p>
        </div>
      </div>
    </footer>
  );
}
