import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <section className="bg-gray-50 py-20 border-b">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Conserto e manutenção de eletrodomésticos na Grande Florianópolis
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Atendimento rápido em Florianópolis, São José, Palhoça e Biguaçu. Orçamento claro e serviço profissional com mais de 5 anos de experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://wa.me/5548996211699?text=Olá!%20Preciso%20de%20um%20orçamento%20para%20conserto%20de%20eletrodoméstico." 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-green-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Chamar no WhatsApp</span>
              </Link>
              <Link 
                href="/contato" 
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-secondary transition-colors shadow-lg"
              >
                Solicitar orçamento
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500 italic">
              Resposta rápida em horário comercial.
            </p>
          </div>
          <div className="hidden md:block bg-blue-100 rounded-3xl h-[400px] relative overflow-hidden flex items-center justify-center">
             <Image 
               src="/img.png" 
               alt="ElectraWS - Especialistas" 
               fill 
               className="object-cover"
               priority
             />
             <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <span className="text-white font-bold text-2xl drop-shadow-lg">ElectraWS - Especialistas</span>
             </div>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4 text-center">Nossos Serviços</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Oferecemos soluções completas para seus aparelhos, desde o diagnóstico preciso até a garantia do conserto.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Conserto', desc: 'Reparos rápidos e eficientes para diversos problemas técnicos.' },
              { title: 'Manutenção Preventiva', desc: 'Evite gastos maiores com limpezas e ajustes regulares.' },
              { title: 'Instalação e Ajuste', desc: 'Instalamos seu novo eletrodoméstico com segurança.' },
              { title: 'Diagnóstico Técnico', desc: 'Identificamos o problema exato com precisão.' },
            ].map((s, i) => (
              <div key={i} className="p-8 border rounded-2xl hover:shadow-xl transition-shadow bg-gray-50">
                <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas Atendidas */}
      <section className="py-12 bg-white border-b overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
            Trabalhamos com as principais marcas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-black text-gray-800 tracking-tighter">BRASTEMP</span>
             <span className="text-2xl font-bold text-gray-800">Consul</span>
             <span className="text-3xl font-bold text-gray-800 flex items-center gap-1">
                <span className="bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs">LG</span>
             </span>
             <span className="text-2xl font-bold text-gray-800 tracking-tight">SAMSUNG</span>
             <span className="text-2xl font-light text-gray-800 uppercase tracking-widest">Electrolux</span>
             <span className="text-2xl font-bold text-gray-800 italic">Midea</span>
          </div>
        </div>
      </section>

      {/* Eletrodomésticos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Eletrodomésticos que Atendemos</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Geladeira', slug: 'conserto-geladeira-grande-florianopolis' },
              { name: 'Máquina de Lavar', slug: 'conserto-maquina-de-lavar-grande-florianopolis' },
              { name: 'Lava e Seca', slug: 'conserto-lava-e-seca-grande-florianopolis' },
              { name: 'Freezer', slug: 'conserto-freezer-grande-florianopolis' },
              { name: 'Micro-ondas', slug: 'conserto-micro-ondas-grande-florianopolis' },
              { name: 'Lava Louça', slug: 'conserto-lava-louca-grande-florianopolis' },
              { name: 'Forno Elétrico', slug: 'conserto-forno-eletrico-grande-florianopolis'}
            ].map((e, i) => (
              <Link 
                key={i} 
                href={`/servicos/${e.slug}`}
                className="bg-white p-6 rounded-xl shadow-sm text-center font-bold text-primary hover:text-secondary hover:shadow-md transition-all border border-gray-100"
              >
                {e.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas Atendidas */}
      <section className="py-20 bg-white border-y">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Atendimento na Grande Florianópolis</h2>
          <p className="text-gray-600 mb-12">Cobrimos as principais cidades da região com agilidade.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Florianópolis', slug: 'florianopolis' },
              { name: 'São José', slug: 'sao-jose-sc' },
              { name: 'Palhoça', slug: 'palhoca' },
              { name: 'Biguaçu', slug: 'biguacu' }
            ].map((c, i) => (
              <Link 
                key={i} 
                href={`/regiao/${c.slug}`}
                className="px-8 py-3 bg-primary/5 text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">Como funciona o nosso atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {[
              { step: '01', title: 'Você nos chama', desc: 'Entre em contato via WhatsApp ou formulário relatando o problema.' },
              { step: '02', title: 'Avaliamos e passamos orçamento', desc: 'Agendamos uma visita técnica para diagnóstico e orçamento transparente.' },
              { step: '03', title: 'Conserto e teste', desc: 'Realizamos o serviço no local e testamos tudo antes de finalizar.' },
            ].map((s, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="text-5xl font-black text-secondary/30 mb-4">{s.step}</div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
           <div className="p-6">
              <h4 className="text-xl font-bold text-primary mb-2">Transparência</h4>
              <p className="text-gray-600">Orçamentos claros, sem taxas escondidas e explicação detalhada do serviço.</p>
           </div>
           <div className="p-6">
              <h4 className="text-xl font-bold text-primary mb-2">Agilidade</h4>
              <p className="text-gray-600">Atendimento prioritário para itens essenciais como geladeiras e máquinas.</p>
           </div>
           <div className="p-6">
              <h4 className="text-xl font-bold text-primary mb-2">Domicílio</h4>
              <p className="text-gray-600">Realizamos a maioria dos reparos diretamente na sua residência ou empresa.</p>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6 text-left">
            {[
              { q: 'Quanto custa o conserto?', a: 'O valor depende do defeito e das peças necessárias. Cobramos uma taxa de visita técnica que é abatida no valor total se o conserto for aprovado.' },
              { q: 'Atende no mesmo dia?', a: 'Sim! Temos equipes circulando na Grande Florianópolis e buscamos atender pedidos urgentes no mesmo dia.' },
              { q: 'Quais regiões atendem?', a: 'Atendemos Florianópolis (Ilha e Continente), São José, Palhoça e Biguaçu.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border">
                <h4 className="font-bold text-primary mb-2">{f.q}</h4>
                <p className="text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Não deixe seu eletrodoméstico parado!</h2>
          <p className="text-xl mb-10 opacity-90">Chame agora e receba um técnico especializado na sua casa.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="https://wa.me/5548996211699" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-700 transition-all shadow-xl"
            >
              WhatsApp (48) 9621-1699
            </Link>
            <Link 
              href="/contato" 
              className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl"
            >
              Pedir Orçamento Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
