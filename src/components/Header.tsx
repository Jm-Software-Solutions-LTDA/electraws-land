import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
          Electra<span className="text-secondary">WS</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center font-medium text-primary">
          <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
          <Link href="/servicos" className="hover:text-secondary transition-colors">Serviços</Link>
          <Link href="/regiao" className="hover:text-secondary transition-colors">Áreas Atendidas</Link>
          <Link href="/contato" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors">
            Orçamento
          </Link>
        </nav>
        <div className="md:hidden text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </header>
  );
}
