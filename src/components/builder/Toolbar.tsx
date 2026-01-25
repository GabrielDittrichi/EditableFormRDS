"use client";

import React from 'react';
import { useFormBuilder } from '@/context/FormBuilderContext';
import { Button } from '@/components/ui/basics';
import { Type, AlignLeft, Hash, Mail, List, Radio, CheckSquare, Calendar } from 'lucide-react';
import { FieldType } from '@/types/form';

export function Toolbar() {
  const { addField } = useFormBuilder();

  const fieldTypes: { type: FieldType; icon: React.ReactNode; label: string }[] = [
    { type: 'text', icon: <Type size={16} />, label: 'Texto Curto' },
    { type: 'textarea', icon: <AlignLeft size={16} />, label: 'Texto Longo' },
    { type: 'number', icon: <Hash size={16} />, label: 'Número' },
    { type: 'email', icon: <Mail size={16} />, label: 'Email' },
    { type: 'select', icon: <List size={16} />, label: 'Seleção' },
    { type: 'radio', icon: <Radio size={16} />, label: 'Múltipla Escolha' },
    { type: 'checkbox', icon: <CheckSquare size={16} />, label: 'Checkbox' },
    { type: 'date', icon: <Calendar size={16} />, label: 'Data' },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50">
      <h3 className="font-bold text-gray-900 mb-6 text-lg">Adicionar Campo</h3>
      <div className="grid grid-cols-1 gap-3">
        {fieldTypes.map((item) => (
          <Button
            key={item.type}
            variant="secondary"
            className="justify-start gap-4 h-12 text-gray-600 hover:text-black hover:border-black/20 hover:bg-gray-50 transition-all duration-200"
            onClick={() => addField(item.type)}
          >
            {item.icon}
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
