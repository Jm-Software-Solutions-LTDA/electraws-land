import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossos Serviços | ElectraWS - Conserto de Eletrodomésticos',
  description: 'Confira nossos serviços de conserto de geladeira, máquina de lavar, micro-ondas e outros eletrodomésticos na Grande Florianópolis.',
  openGraph: {
    title: 'Nossos Serviços | ElectraWS - Especialistas em Eletrodomésticos',
    description: 'Manutenção rápida em Florianópolis, São José e região. Garantia e atendimento especializado.',
  },
};

export default function ServicesPage() {
  const services = [
    { title: 'Conserto de Geladeira', slug: 'conserto-geladeira-grande-florianopolis', icon: '❄️' },
    { title: 'Máquina de Lavar', slug: 'conserto-maquina-de-lavar-grande-florianopolis', icon: '🧺' },
    { title: 'Lava e Seca', slug: 'conserto-lava-e-seca-grande-florianopolis', icon: '🌀' },
    { title: 'Micro-ondas', slug: 'conserto-micro-ondas-grande-florianopolis', icon: '⏲️' },
    { title: 'Freezer', slug: 'conserto-freezer-grande-florianopolis', icon: '🧊' },
    { title: 'Lava-louça', slug: 'conserto-lava-louca-grande-florianopolis', icon: '🍽️' },
    { title: 'Forno Elétrico', slug: 'conserto-forno-eletrico-grande-florianopolis', icon: '🔥' },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">
          Serviços de conserto de eletrodomésticos na Grande Florianópolis
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Oferecemos assistência técnica especializada para os principais eletrodomésticos da sua casa ou empresa. Atendimento rápido e com garantia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((s, i) => (
            <Link key={i} href={`/servicos/${s.slug}`} className="group">
              <div className="border rounded-2xl p-8 hover:border-secondary transition-all hover:shadow-lg bg-white h-full flex flex-col items-center text-center">
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform block">{s.icon}</span>
                <h2 className="text-2xl font-bold text-primary mb-4">{s.title}</h2>
                <p className="text-gray-600 mb-6 flex-grow">
                  Manutenção especializada com peças originais e técnicos qualificados.
                </p>
                <span className="text-secondary font-bold flex items-center gap-2">
                  Ver detalhes 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <section className="bg-gray-50 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Áreas Atendidas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <Link href="/regiao/florianopolis" className="p-4 bg-white rounded-xl shadow-sm hover:text-secondary font-medium">Florianópolis</Link>
                <Link href="/regiao/sao-jose-sc" className="p-4 bg-white rounded-xl shadow-sm hover:text-secondary font-medium">São José</Link>
                <Link href="/regiao/palhoca" className="p-4 bg-white rounded-xl shadow-sm hover:text-secondary font-medium">Palhoça</Link>
                <Link href="/regiao/biguacu" className="p-4 bg-white rounded-xl shadow-sm hover:text-secondary font-medium">Biguaçu</Link>
            </div>
        </section>

        <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Perguntas Frequentes sobre Serviços</h2>
            <div className="space-y-4">
                <div className="border rounded-xl p-6 bg-white">
                    <h3 className="font-bold text-primary mb-2">Vocês dão garantia no serviço?</h3>
                    <p className="text-gray-600">Sim, todos os nossos serviços e peças substituídas possuem garantia legal, proporcionando total segurança para você.</p>
                </div>
                <div className="border rounded-xl p-6 bg-white">
                    <h3 className="font-bold text-primary mb-2">Quais marcas vocês atendem?</h3>
                    <p className="text-gray-600">Atendemos as principais marcas do mercado, como Brastemp, Consul, Electrolux, Samsung, LG, entre outras.</p>
                </div>
            </div>
            <div className="mt-12 text-center">
                <Link 
                    href="https://wa.me/5548996211699" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-10 py-4 rounded-full font-bold inline-block hover:bg-green-700 transition-colors shadow-lg"
                >
                    Solicitar Orçamento via WhatsApp
                </Link>
            </div>
        </section>
      </div>
    </div>
  );
}
