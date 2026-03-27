"use client";

import React from 'react';
import { useFormBuilder } from '@/context/FormBuilderContext';
import { Input, Button, Label } from '@/components/ui/basics';

export function EmailsTab() {
  const { schema, updateEmailConfig } = useFormBuilder();
  const config = schema.emailConfig || { enabled: false };

  // Find fields that could be used for email
  const emailFields = schema.fields.filter(f => f.type === 'email' || f.type === 'text');

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Configuração de E-mails</h2>
        <p className="text-gray-500">Envie um e-mail de confirmação automático para quem responder o formulário.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Ativar E-mails Automáticos</label>
          <label className="relative inline-flex items-center cursor-pointer">
              <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={config.enabled}
                  onChange={(e) => updateEmailConfig({ enabled: e.target.checked })}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
          </label>
        </div>

        {config.enabled && (
          <div className="space-y-6 pt-6 border-t border-gray-100">
            <div>
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Campo de E-mail Destino</Label>
              <select 
                className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-black focus:bg-white transition-colors"
                value={config.emailFieldId || ''}
                onChange={(e) => updateEmailConfig({ emailFieldId: e.target.value })}
              >
                <option value="">Selecione a pergunta que captura o e-mail...</option>
                {emailFields.map(f => (
                  <option key={f.id} value={f.id}>{f.label}</option>
                ))}
              </select>
              <p className="text-xs text-gray-400 mt-2">O e-mail será enviado para o endereço preenchido neste campo.</p>
            </div>

            <div>
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Assunto do E-mail</Label>
              <Input 
                value={config.subject || ''}
                onChange={(e) => updateEmailConfig({ subject: e.target.value })}
                placeholder="Ex: Confirmação de Resposta"
                className="bg-gray-50"
              />
            </div>

            <div>
              <Label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Corpo da Mensagem</Label>
              <textarea 
                value={config.body || ''}
                onChange={(e) => updateEmailConfig({ body: e.target.value })}
                className="w-full min-h-[150px] p-4 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-black focus:bg-white transition-colors resize-y"
                placeholder="Escreva a mensagem de confirmação aqui..."
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>Nota:</strong> As respostas do usuário serão anexadas automaticamente ao final deste e-mail. Para o envio funcionar em produção, você precisará configurar sua API Key do Resend no arquivo <code>.env.local</code>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
