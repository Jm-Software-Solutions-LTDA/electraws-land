import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://electraws.com.br';
  
  const services = [
    'conserto-geladeira-grande-florianopolis',
    'conserto-maquina-de-lavar-grande-florianopolis',
    'conserto-micro-ondas-grande-florianopolis',
  ];
  
  const regions = [
    'florianopolis',
    'sao-jose-sc',
    'palhoca',
    'biguacu',
  ];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const regionUrls = regions.map((city) => ({
    url: `${baseUrl}/regiao/${city}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/servicos`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/regiao`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...serviceUrls,
    ...regionUrls,
  ];
}
