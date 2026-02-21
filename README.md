# ElectraWS - Landing Page Profissional

Landing Page otimizada para a **ElectraWS**, empresa especializada em manutenção e conserto de eletrodomésticos na Grande Florianópolis. Este projeto foi desenvolvido com foco em **performance, SEO local e conversão**.

## 🚀 Tecnologias Utilizadas

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Geração de Site:** SSG (Static Site Generation) para máxima velocidade e SEO.

## ✨ Funcionalidades Principais

- **SEO Local Estruturado:**
  - Páginas dedicadas para cidades: Florianópolis, São José, Palhoça e Biguaçu.
  - Páginas específicas por tipo de serviço (Geladeira, Máquina de Lavar, Micro-ondas, etc.).
  - Geração automática de `sitemap.xml` e `robots.txt`.
  - Metadados dinâmicos para cada rota.
- **Design Responsivo & Moderno:**
  - Totalmente adaptado para dispositivos móveis, tablets e desktop.
  - Identidade visual profissional com as cores da marca (#2c3e67 e #4a6fa5).
- **Foco em Conversão:**
  - Botões de WhatsApp com mensagens pré-preenchidas que abrem em nova aba.
  - Formulário de contato intuitivo.
  - Seção de prova social e diferenciais competitivos.
  - Exibição de logotipos das marcas atendidas (Brastemp, Consul, LG, Samsung, Electrolux, Midea).
- **Performance:**
  - Carregamento instantâneo via SSG.
  - Otimização de fontes e scripts nativa do Next.js.

## 📂 Estrutura do Projeto

```text
src/
├── app/                  # Rotas e páginas (App Router)
│   ├── contato/          # Página de contato e formulário
│   ├── regiao/           # Páginas de SEO local por cidade
│   ├── servicos/         # Páginas de serviços específicos
│   ├── globals.css       # Configurações de tema e Tailwind
│   ├── layout.tsx        # Layout principal (Header/Footer)
│   └── page.tsx          # Home Page
├── components/           # Componentes reutilizáveis (Header, Footer, etc.)
└── public/               # Ativos estáticos (imagens, ícones)
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js 18.x ou superior
- npm ou yarn

### Instalação
1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento
Execute o servidor de desenvolvimento:
```bash
npm run dev
```
Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção
Para gerar a versão estática e otimizada:
```bash
npm run build
```
Os arquivos gerados estarão na pasta `.next` ou prontos para deploy em plataformas como Vercel ou Netlify.

