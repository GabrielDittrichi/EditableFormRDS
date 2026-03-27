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
import { EmailsTab } from '@/components/admin/EmailsTab';
import { DataTab } from '@/components/admin/DataTab';

export default function AdminPage() {
  const { schema, updateFormMetadata, updateWelcomeScreen } = useFormBuilder();
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'editor' | 'emails' | 'data'>('editor');
  const [isUploading, setIsUploading] = React.useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        updateWelcomeScreen({ imageUrl: data.url });
      } else {
        alert(data.error || 'Erro ao fazer upload da imagem');
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Erro ao conectar com o servidor para upload');
    } finally {
      setIsUploading(false);
    }
  };

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
             
             {/* Navegação de Abas */}
             <nav className="flex space-x-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
               <button 
                 onClick={() => setActiveTab('editor')}
                 className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${activeTab === 'editor' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
               >
                 Editar Formulário
               </button>
               <button 
                 onClick={() => setActiveTab('emails')}
                 className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${activeTab === 'emails' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
               >
                 Configurar E-mails
               </button>
               <button 
                 onClick={() => setActiveTab('data')}
                 className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${activeTab === 'data' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'}`}
               >
                 Acessar Dados
               </button>
             </nav>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={copyToClipboard} className="text-gray-600 rounded-full">
                {copied ? <Check size={16} className="mr-2 text-green-500" /> : <Copy size={16} className="mr-2" />}
                {copied ? "Copiado!" : "Copiar JSON"}
            </Button>
            <Link href="/" target="_blank">
                <Button variant="primary" className="rounded-full px-6 shadow-xl shadow-black/10"><Eye size={16} className="mr-2"/> Visualizar</Button>
            </Link>
          </div>
       </header>

       <div className="flex-1 container mx-auto p-8">
          {activeTab === 'editor' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
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
                    
                    {/* Configurações Avançadas */}
                    <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Redirecionamento */}
                        <div>
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Redirecionamento ao Concluir</label>
                            <Input 
                               value={schema.redirectUrl || ''} 
                               onChange={e => updateFormMetadata(schema.title, schema.description || '', e.target.value)} 
                               className="text-sm bg-white border border-gray-200 rounded-lg px-3 py-2 w-full focus:bg-white transition-colors"
                               placeholder="https://exemplo.com/sucesso"
                            />
                        </div>
                    </div>

                    {/* Tela de Boas-Vindas */}
                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Tela de Boas-Vindas</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    checked={schema.welcomeScreen?.enabled || false}
                                    onChange={(e) => updateWelcomeScreen({ enabled: e.target.checked })}
                                />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                            </label>
                        </div>

                        {schema.welcomeScreen?.enabled && (
                            <div className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Título</label>
                                    <Input 
                                        value={schema.welcomeScreen.title || ''} 
                                        onChange={e => updateWelcomeScreen({ title: e.target.value })} 
                                        className="bg-white"
                                        placeholder="Bem-vindo!"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Descrição / Contexto</label>
                                    <textarea 
                                        value={schema.welcomeScreen.description || ''} 
                                        onChange={e => updateWelcomeScreen({ description: e.target.value })} 
                                        className="w-full min-h-[100px] p-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:border-black resize-none"
                                        placeholder="Explique sobre o que é este formulário..."
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Texto do Botão</label>
                                        <Input 
                                            value={schema.welcomeScreen.buttonText || ''} 
                                            onChange={e => updateWelcomeScreen({ buttonText: e.target.value })} 
                                            className="bg-white"
                                            placeholder="Começar"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Imagem de Fundo (Opcional)</label>
                                        <div className="flex items-center gap-2">
                                          <label className="flex-1 cursor-pointer">
                                            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-50 flex items-center justify-center transition-colors">
                                              {isUploading ? 'Enviando...' : 'Escolher Imagem'}
                                            </div>
                                            <input 
                                              type="file" 
                                              accept="image/*" 
                                              className="hidden" 
                                              onChange={handleImageUpload}
                                              disabled={isUploading}
                                            />
                                          </label>
                                          {schema.welcomeScreen.imageUrl && (
                                            <Button 
                                              variant="ghost" 
                                              size="icon" 
                                              onClick={() => updateWelcomeScreen({ imageUrl: undefined })}
                                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                            >
                                              <span className="sr-only">Remover</span>
                                              &times;
                                            </Button>
                                          )}
                                        </div>
                                        {schema.welcomeScreen.imageUrl && (
                                          <div className="mt-2 text-xs text-green-600 truncate">
                                            Imagem carregada com sucesso
                                          </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
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
          )}

          {activeTab === 'emails' && <EmailsTab />}
          {activeTab === 'data' && <DataTab />}
       </div>
    </div>
  );
}
