import Link from 'next/link';

export default function Page() {
  const cities = [
    { name: 'Florianópolis', slug: 'florianopolis' },
    { name: 'São José (SC)', slug: 'sao-jose-sc' },
    { name: 'Palhoça', slug: 'palhoca' },
    { name: 'Biguaçu', slug: 'biguacu' }
  ];

  return (
    <div className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-8">Nossas Regiões de Atendimento</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {cities.map((city, i) => (
            <Link 
              key={i} 
              href={`/regiao/${city.slug}`} 
              className="p-8 border rounded-2xl hover:border-secondary font-bold text-primary bg-white shadow-sm hover:shadow-md transition-all flex items-center justify-center"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
