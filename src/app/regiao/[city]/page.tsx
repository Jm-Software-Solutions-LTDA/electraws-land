import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CityData {
  name: string;
  fullName: string;
  description: string;
  neighborhoods: string[];
  faq: { q: string; a: string }[];
}

const cityData: Record<string, CityData> = {
  'florianopolis': {
    name: 'Florianópolis',
    fullName: 'Florianópolis (Ilha e Continente)',
    description: 'Atendimento especializado em conserto de eletrodomésticos em toda a capital catarinense. Chegamos rápido ao seu endereço.',
    neighborhoods: ['Centro', 'Trindade', 'Itacorubi', 'Campeche', 'Estreito', 'Coqueiros', 'Ingleses', 'Jurerê'],
    faq: [
      { q: 'Vocês atendem no Norte da Ilha?', a: 'Sim, atendemos Ingleses, Jurerê, Canasvieiras e demais bairros do Norte.' },
      { q: 'Qual o tempo de resposta em Florianópolis?', a: 'Geralmente conseguimos realizar a visita no mesmo dia ou em até 24h.' }
    ]
  },
  'sao-jose-sc': {
    name: 'São José',
    fullName: 'São José (SC)',
    description: 'Assistência técnica de eletrodomésticos em São José. Atendimento domiciliar em todos os bairros da cidade.',
    neighborhoods: ['Kobrasol', 'Campinas', 'Barreiros', 'Areias', 'Serraria', 'Ipiranga', 'Forquilhinhas'],
    faq: [
      { q: 'Atendem na região do Kobrasol?', a: 'Com certeza! Temos técnicos circulando constantemente por São José e o Kobrasol é uma de nossas áreas principais.' }
    ]
  },
  'palhoca': {
    name: 'Palhoça',
    fullName: 'Palhoça (SC)',
    description: 'Conserto de eletrodomésticos em Palhoça. Qualidade e rapidez para os moradores da região.',
    neighborhoods: ['Pagani', 'Pedra Branca', 'Ponte do Imaruim', 'Centro', 'Passa Vinte'],
    faq: [
        { q: 'Atendem no bairro Pedra Branca?', a: 'Sim, atendemos a Pedra Branca e toda a região central de Palhoça.' }
    ]
  },
  'biguacu': {
    name: 'Biguaçu',
    fullName: 'Biguaçu (SC)',
    description: 'Serviço profissional de manutenção de eletrodomésticos em Biguaçu e proximidades.',
    neighborhoods: ['Centro', 'Bom Viver', 'Fundos', 'Praia João Rosa'],
    faq: [
        { q: 'Atendem em Biguaçu todos os dias?', a: 'Atendemos de segunda a sábado em toda a região de Biguaçu.' }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return { title: 'Região não encontrada' };

  return {
    title: `Conserto de Eletrodomésticos em ${data.fullName} | ElectraWS`,
    description: data.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({
    city,
  }));
}

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = cityData[city];

  if (!data) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Conserto de Eletrodomésticos em {data.fullName}</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">{data.description}</p>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20 border">
           <h2 className="text-2xl font-bold text-primary mb-8">Bairros Atendidos em {data.name}</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {data.neighborhoods.map((n, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2">
                   <span className="text-secondary">📍</span>
                   <span className="font-medium text-gray-700">{n}</span>
                </div>
              ))}
           </div>
           <p className="mt-8 text-center text-gray-500 italic">Não encontrou seu bairro? Entre em contato e consulte disponibilidade.</p>
        </div>

        <section className="mb-20">
           <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nossos diferenciais em {data.name}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                 <div className="text-4xl mb-4">🚀</div>
                 <h3 className="text-xl font-bold text-primary mb-2">Rapidez</h3>
                 <p className="text-gray-600">Equipes locais prontas para atender seu chamado com prioridade.</p>
              </div>
              <div className="text-center">
                 <div className="text-4xl mb-4">🏠</div>
                 <h3 className="text-xl font-bold text-primary mb-2">Atendimento em Domicílio</h3>
                 <p className="text-gray-600">Não se preocupe em transportar seu aparelho, nós vamos até você.</p>
              </div>
              <div className="text-center">
                 <div className="text-4xl mb-4">🛡️</div>
                 <h3 className="text-xl font-bold text-primary mb-2">Garantia</h3>
                 <p className="text-gray-600">Serviços executados com peças de qualidade e garantia assegurada.</p>
              </div>
           </div>
        </section>

        <section className="max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl font-bold text-primary mb-8 text-center">FAQ Local</h2>
           <div className="space-y-6">
              {data.faq.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border">
                  <h4 className="font-bold text-primary mb-2">{f.q}</h4>
                  <p className="text-gray-600">{f.a}</p>
                </div>
              ))}
           </div>
        </section>

        <div className="bg-secondary text-white p-12 rounded-3xl text-center">
           <h2 className="text-3xl font-bold mb-6">Precisa de técnico em {data.name}?</h2>
           <p className="text-xl mb-10 opacity-90">Agende sua visita agora mesmo pelo WhatsApp ou telefone.</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="https://wa.me/5548996211699" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold transition-all"
              >
                WhatsApp (48) 9621-1699
              </Link>
              <Link href="/contato" className="bg-white text-primary px-8 py-4 rounded-full font-bold transition-all hover:bg-gray-100">
                Solicitar Orçamento Online
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
