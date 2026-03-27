"use client";

import React, { useEffect, useState } from 'react';
import { FormResponse, getResponses } from '@/lib/responses';
import { useFormBuilder } from '@/context/FormBuilderContext';

export function DataTab() {
  const { schema } = useFormBuilder();
  const [responses, setResponses] = useState<FormResponse[]>([]);

  useEffect(() => {
    // Carregar respostas ao montar a aba
    setResponses(getResponses());
  }, []);

  if (responses.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Acessar Dados</h2>
        <p className="text-gray-500">Nenhuma resposta foi recebida ainda. Quando os usuários preencherem o formulário, os dados aparecerão aqui.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dados do Formulário</h2>
        <p className="text-gray-500">Total de respostas: {responses.length}</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-bold tracking-wider">Data</th>
                <th className="px-6 py-4 font-bold tracking-wider">Origem (UTM)</th>
                {schema.fields.map(f => (
                  <th key={f.id} className="px-6 py-4 font-bold tracking-wider truncate max-w-[200px]">
                    {f.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {responses.map((res) => (
                <tr key={res.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {new Date(res.timestamp).toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium uppercase">
                      {res.source || 'direto'}
                    </span>
                  </td>
                  {schema.fields.map(f => {
                    const answer = res.answers[f.id];
                    return (
                      <td key={f.id} className="px-6 py-4 text-gray-900 max-w-[200px] truncate">
                        {Array.isArray(answer) ? answer.join(', ') : answer || '-'}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
