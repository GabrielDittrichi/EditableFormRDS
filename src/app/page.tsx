import Link from 'next/link';
import { Button } from '@/components/ui/basics';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-50">
      <h1 className="text-4xl font-bold mb-8 text-slate-900">Gerador de Formulários</h1>
      <div className="flex gap-4">
        <Link href="/admin">
          <Button className="h-12 text-lg">Criar/Editar Formulário (Admin)</Button>
        </Link>
        <Link href="/view">
          <Button variant="secondary" className="h-12 text-lg">Visualizar Formulário (Usuário)</Button>
        </Link>
      </div>
    </main>
  )
}
