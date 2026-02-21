import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ServiceData {
  title: string;
  description: string;
  symptoms: string[];
  evaluations: string[];
  faq: { q: string; a: string }[];
}

const serviceData: Record<string, ServiceData> = {
  'conserto-geladeira-grande-florianopolis': {
    title: 'Conserto de Geladeira em Florianópolis e Região',
    description: 'Manutenção especializada em refrigeradores de todas as marcas. Atendimento rápido para garantir que seus alimentos não estraguem.',
    symptoms: ['Geladeira não gela', 'Fazendo barulho estranho', 'Vazamento de água', 'Acumulando gelo no freezer'],
    evaluations: ['Compressor e motor', 'Sistema de gás e vedação', 'Termostato e sensores', 'Placa eletrônica'],
    faq: [
      { q: 'Por que minha geladeira não está gelando?', a: 'Pode ser falta de gás, problema no compressor ou no termostato. Somente um técnico pode diagnosticar com precisão.' },
      { q: 'Quanto tempo demora o conserto?', a: 'A maioria dos reparos é realizada no mesmo dia da visita técnica.' }
    ]
  },
  'conserto-maquina-de-lavar-grande-florianopolis': {
    title: 'Conserto de Máquina de Lavar em Florianópolis e Região',
    description: 'Assistência técnica completa para máquinas de lavar e tanquinhos. Resolvemos problemas de mecânica e eletrônica.',
    symptoms: ['Não centrífuga', 'Não solta a água', 'Barulho excessivo ao bater', 'Painel piscando ou não liga'],
    evaluations: ['Bomba de drenagem', 'Motor e correia', 'Placa de comando', 'Mecanismo e rolamentos'],
    faq: [
      { q: 'Minha máquina faz muito barulho na centrifugação, o que pode ser?', a: 'Geralmente é um problema nos rolamentos ou no suporte do cesto.' },
      { q: 'Vocês consertam lava e seca também?', a: 'Sim, somos especialistas em máquinas lava e seca de diversas marcas.' }
    ]
  },
  'conserto-micro-ondas-grande-florianopolis': {
    title: 'Conserto de Micro-ondas em Florianópolis e Região',
    description: 'Manutenção rápida e segura para seu forno de micro-ondas. Trabalhamos com todas as marcas.',
    symptoms: ['Não esquenta', 'Prato não gira', 'Faíscas internas', 'Teclado não responde'],
    evaluations: ['Magnetron e trafo', 'Capacitor de alta tensão', 'Placa de controle', 'Motor do prato e membrana'],
    faq: [
      { q: 'O micro-ondas liga mas não esquenta, tem conserto?', a: 'Sim, geralmente é um problema no magnetron ou no fusível de alta, componentes que podem ser substituídos.' }
    ]
  },
  'conserto-lava-e-seca-grande-florianopolis': {
    title: 'Conserto de Lava e Seca em Florianópolis e Região',
    description: 'Especialistas em máquinas lava e seca de todas as marcas (LG, Samsung, etc). Resolvemos erros de painel, secagem e mecânica.',
    symptoms: ['Não seca a roupa', 'Erro no painel', 'Vazamento de água', 'Barulho excessivo'],
    evaluations: ['Sensores de temperatura', 'Resistência de secagem', 'Placa eletrônica', 'Sistema de drenagem'],
    faq: [
      { q: 'Quanto tempo dura o conserto de uma lava e seca?', a: 'Depende da peça necessária, mas muitos reparos são feitos no mesmo dia.' }
    ]
  },
  'conserto-freezer-grande-florianopolis': {
    title: 'Conserto de Freezer em Florianópolis e Região',
    description: 'Assistência técnica para freezers horizontais e verticais, residenciais ou comerciais.',
    symptoms: ['Não gela', 'Acumulando gelo excessivo', 'Motor não desliga', 'Luz de alerta acesa'],
    evaluations: ['Termostato', 'Gás refrigerante', 'Borracha de vedação', 'Relé de partida'],
    faq: [
      { q: 'Meu freezer parou de gelar de repente, o que fazer?', a: 'Verifique se a tomada está ok e chame um técnico para avaliar o compressor ou gás.' }
    ]
  },
  'conserto-fogao-grande-florianopolis': {
    title: 'Conserto de Fogão em Florianópolis e Região',
    description: 'Manutenção de fogões a gás, cooktops e fornos. Limpeza de bicos e troca de peças.',
    symptoms: ['Chama amarela', 'Cheiro de gás', 'Bocas entupidas', 'Acendedor não funciona'],
    evaluations: ['Válvulas de segurança', 'Injetores de gás', 'Usinas de ignição', 'Tubulação interna'],
    faq: [
      { q: 'É perigoso consertar o fogão?', a: 'Sim, por envolver gás, o conserto deve ser feito sempre por um profissional qualificado.' }
    ]
  },
  'conserto-forno-eletrico-grande-florianopolis': {
    title: 'Conserto de Forno Elétrico em Florianópolis e Região',
    description: 'Assistência técnica para fornos elétricos de embutir ou bancada. Troca de resistência e termostato.',
    symptoms: ['Não liga', 'Não esquenta por igual', 'Porta não fecha direito', 'Timer estragado'],
    evaluations: ['Resistência superior/inferior', 'Termostato de temperatura', 'Fiação interna', 'Chaves seletoras'],
    faq: [
      { q: 'Vale a pena consertar forno elétrico?', a: 'Na maioria das vezes sim, pois o custo do reparo é bem menor que um forno novo de boa qualidade.' }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceData[slug];
  if (!service) return { title: 'Serviço não encontrado' };

  return {
    title: `${service.title} | ElectraWS`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">{service.title}</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">{service.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">Sintomas Comuns</h2>
            <ul className="space-y-4">
              {service.symptoms.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 border rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">O que avaliamos</h2>
            <ul className="space-y-4">
              {service.evaluations.map((e, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Como funciona o atendimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
             {['Agendamento', 'Visita Técnica', 'Orçamento', 'Execução'].map((step, i) => (
               <div key={i} className="p-6 border rounded-xl bg-gray-50 font-bold text-primary">
                 {step}
               </div>
             ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl font-bold text-primary mb-8 text-center">FAQ Específico</h2>
           <div className="space-y-6">
              {service.faq.map((f, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border">
                  <h4 className="font-bold text-primary mb-2">{f.q}</h4>
                  <p className="text-gray-600">{f.a}</p>
                </div>
              ))}
           </div>
        </section>

        <div className="text-center bg-primary text-white p-12 rounded-3xl">
           <h2 className="text-3xl font-bold mb-6">Seu {service.title.split(' ')[2]} quebrou?</h2>
           <p className="text-xl mb-8 opacity-90">Não espere mais. Agende agora seu conserto em domicílio.</p>
           <Link 
              href="https://wa.me/5548996211699" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all inline-block"
            >
              Chamar no WhatsApp
           </Link>
        </div>
      </div>
    </div>
  );
}
