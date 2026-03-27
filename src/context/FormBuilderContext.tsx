"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormField, FormSchema, FieldType } from '@/types/form';

interface FormBuilderContextType {
  schema: FormSchema;
  addField: (type: FieldType) => void;
  removeField: (id: string) => void;
  updateField: (id: string, updates: Partial<FormField>) => void;
  updateFormMetadata: (title: string, description: string, redirectUrl?: string) => void;
  updateWelcomeScreen: (updates: Partial<NonNullable<FormSchema['welcomeScreen']>>) => void;
  updateEmailConfig: (updates: Partial<NonNullable<FormSchema['emailConfig']>>) => void;
  moveField: (id: string, direction: 'up' | 'down') => void;
}

const defaultSchema: FormSchema = {
  id: 'form-1',
  title: 'Meu Formulário Editável',
  description: 'Preencha as informações abaixo.',
  welcomeScreen: {
    enabled: false,
    title: 'Bem-vindo ao nosso formulário',
    description: 'Por favor, reserve alguns minutos para preencher as informações abaixo.',
    buttonText: 'Começar'
  },
  fields: []
};

const FormBuilderContext = createContext<FormBuilderContextType | undefined>(undefined);

export function FormBuilderProvider({ children }: { children: ReactNode }) {
  const [schema, setSchema] = useState<FormSchema>(defaultSchema);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  React.useEffect(() => {
    const saved = localStorage.getItem('form-schema');
    if (saved) {
      try {
        setSchema(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse schema", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  React.useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('form-schema', JSON.stringify(schema));
    }
  }, [schema, isLoaded]);

  const addField = (type: FieldType) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: 'Nova Pergunta',
      required: false,
      options: type === 'select' || type === 'radio' || type === 'checkbox' 
        ? [{ label: 'Opção 1', value: 'op1' }] 
        : undefined
    };

    setSchema(prev => ({
      ...prev,
      fields: [...prev.fields, newField]
    }));
  };

  const removeField = (id: string) => {
    setSchema(prev => ({
      ...prev,
      fields: prev.fields.filter(f => f.id !== id)
    }));
  };

  const updateField = (id: string, updates: Partial<FormField>) => {
    setSchema(prev => ({
      ...prev,
      fields: prev.fields.map(f => f.id === id ? { ...f, ...updates } : f)
    }));
  };

  const updateFormMetadata = (title: string, description: string, redirectUrl?: string) => {
    setSchema(prev => ({
      ...prev,
      title,
      description,
      redirectUrl
    }));
  };

  const updateWelcomeScreen = (updates: Partial<NonNullable<FormSchema['welcomeScreen']>>) => {
    setSchema(prev => ({
      ...prev,
      welcomeScreen: {
        ...(prev.welcomeScreen || { enabled: false }),
        ...updates
      }
    }));
  };

  const updateEmailConfig = (updates: Partial<NonNullable<FormSchema['emailConfig']>>) => {
    setSchema(prev => ({
      ...prev,
      emailConfig: {
        ...(prev.emailConfig || { enabled: false }),
        ...updates
      }
    }));
  };

  const moveField = (id: string, direction: 'up' | 'down') => {
    setSchema(prev => {
      const index = prev.fields.findIndex(f => f.id === id);
      if (index === -1) return prev;
      
      const newFields = [...prev.fields];
      if (direction === 'up' && index > 0) {
        [newFields[index - 1], newFields[index]] = [newFields[index], newFields[index - 1]];
      } else if (direction === 'down' && index < newFields.length - 1) {
        [newFields[index + 1], newFields[index]] = [newFields[index], newFields[index + 1]];
      }

      return { ...prev, fields: newFields };
    });
  };

  return (
    <FormBuilderContext.Provider value={{
      schema,
      addField,
      removeField,
      updateField,
      updateFormMetadata,
      updateWelcomeScreen,
      updateEmailConfig,
      moveField
    }}>
      {children}
    </FormBuilderContext.Provider>
  );
}

export function useFormBuilder() {
  const context = useContext(FormBuilderContext);
  if (context === undefined) {
    throw new Error('useFormBuilder must be used within a FormBuilderProvider');
  }
  return context;
}
