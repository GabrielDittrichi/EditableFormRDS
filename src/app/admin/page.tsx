"use client";

import React from 'react';
import { useFormBuilder } from '@/context/FormBuilderContext';
import { Toolbar } from '@/components/builder/Toolbar';
import { FieldEditor } from '@/components/builder/FieldEditor';
import { FormRenderer } from '@/components/renderer/FormRenderer';
import { Input, Label, Button } from '@/components/ui/basics';
import Link from 'next/link';
import { ArrowLeft, Eye, Copy, Check } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

export default function AdminPage() {
  const { schema, updateFormMetadata } = useFormBuilder();
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
       {/* Header */}
       <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 flex justify-between items-center sticky top-0 z-20">
          <div className="flex items-center gap-6">
             <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100"><ArrowLeft size={20}/></Button>
             </Link>
             <div className="h-6 w-px bg-gray-200"></div>
             <h1 className="text-lg font-bold text-gray-900">Editor</h1>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={copyToClipboard} className="text-gray-600 rounded-full">
                {copied ? <Check size={16} className="mr-2 text-green-500" /> : <Copy size={16} className="mr-2" />}
                {copied ? "Copiado!" : "Copiar JSON"}
            </Button>
            <Link href="/view" target="_blank">
                <Button variant="primary" className="rounded-full px-6 shadow-xl shadow-black/10"><Eye size={16} className="mr-2"/> Visualizar</Button>
            </Link>
          </div>
       </header>

       <div className="flex-1 container mx-auto p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Editor */}
          <div className="lg:col-span-8 space-y-8">
             <div className="bg-transparent p-0">
                <Input 
                   value={schema.title} 
                   onChange={e => updateFormMetadata(e.target.value, schema.description || '', schema.redirectUrl)} 
                   className="text-4xl font-black bg-transparent border-none px-0 shadow-none h-auto placeholder:text-gray-300 focus:ring-0 focus:bg-transparent"
                   placeholder="Nome do Formulário"
                />
                <Input 
                   value={schema.description || ''} 
                   onChange={e => updateFormMetadata(schema.title, e.target.value, schema.redirectUrl)} 
                   className="text-xl text-gray-500 bg-transparent border-none px-0 shadow-none h-auto mt-2 focus:ring-0 focus:bg-transparent"
                   placeholder="Adicione uma descrição..."
                />
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Redirecionamento ao Concluir</label>
                    <Input 
                       value={schema.redirectUrl || ''} 
                       onChange={e => updateFormMetadata(schema.title, schema.description || '', e.target.value)} 
                       className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-full max-w-md focus:bg-white transition-colors"
                       placeholder="https://exemplo.com/sucesso (Opcional)"
                    />
                </div>
             </div>

             <div className="space-y-6">
                <AnimatePresence mode='popLayout'>
                {schema.fields.map((field, index) => (
                   <FieldEditor 
                      key={field.id} 
                      field={field} 
                      isFirst={index === 0} 
                      isLast={index === schema.fields.length - 1}
                   />
                ))}
                </AnimatePresence>
                
                <div className="h-20 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                   Adicione campos usando a barra lateral
                </div>
             </div>
          </div>

          {/* Right Column: Toolbar & Preview */}
          <div className="lg:col-span-4 relative">
             <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-2 lg:pb-4 space-y-8 scrollbar-hide">
                <Toolbar />
                
                <div>
                   <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider">Preview Mobile</h3>
                   </div>
                   <div className="border-[8px] border-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white h-[600px] w-full relative mx-auto max-w-[320px]">
                      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 flex justify-center items-center z-10">
                         <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                      </div>
                      <div className="h-full overflow-y-auto pt-8 scrollbar-hide">
                         <FormRenderer schema={schema} preview={true} />
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
}
