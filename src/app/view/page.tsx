"use client";

import { useFormBuilder } from '@/context/FormBuilderContext';
import { FormRenderer } from '@/components/renderer/FormRenderer';
import { Button } from '@/components/ui/basics';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ViewPage() {
  const { schema } = useFormBuilder();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-6 max-w-2xl mx-auto">
         <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4 text-slate-500 hover:text-slate-900">
               <ArrowLeft size={16} className="mr-2" /> Voltar ao Início
            </Button>
         </Link>
      </div>
      <FormRenderer schema={schema} />
    </div>
  );
}
