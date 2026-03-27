"use client";

import React, { useState, useEffect } from 'react';
import { FormSchema } from '@/types/form';
import { Input, Label, Button } from '@/components/ui/basics';
import { ArrowRight, Check, ChevronUp, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveResponse } from '@/lib/responses';

interface FormRendererProps {
  schema: FormSchema;
  preview?: boolean;
}

export function FormRenderer({ schema, preview = false }: FormRendererProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [direction, setDirection] = useState(0);
  const [hasStarted, setHasStarted] = useState(!schema.welcomeScreen?.enabled);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset step when schema changes (important for builder preview)
  useEffect(() => {
    if (preview) {
        // Keep current step valid if fields are removed
        if (currentStep >= schema.fields.length && schema.fields.length > 0) {
            setCurrentStep(schema.fields.length - 1);
        }
        // Update hasStarted if welcomeScreen config changes during preview
        setHasStarted(!schema.welcomeScreen?.enabled);
    }
  }, [schema.fields.length, preview, currentStep, schema.welcomeScreen?.enabled]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (preview) return;
    
    setIsSubmitting(true);
    
    // Get UTM source
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source') || urlParams.get('ref') || 'direto';

    // Save locally
    saveResponse({ answers, source });

    // Send email via API if configured
    if (schema.emailConfig?.enabled && schema.emailConfig.emailFieldId) {
        const userEmail = answers[schema.emailConfig.emailFieldId];
        if (userEmail) {
            try {
                await fetch('/api/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: userEmail,
                        subject: schema.emailConfig.subject || 'Confirmação de Resposta',
                        body: schema.emailConfig.body || 'Obrigado por responder!',
                        answers
                    })
                });
            } catch (err) {
                console.error('Error sending email:', err);
            }
        }
    }

    if (schema.redirectUrl) {
        window.location.href = schema.redirectUrl;
    } else {
        alert('Formulário enviado com sucesso!');
        setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep < schema.fields.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleAnswer = (value: any) => {
     if (preview && !value) return; // Allow typing in preview without state if complex
     const fieldId = schema.fields[currentStep].id;
     setAnswers(prev => ({ ...prev, [fieldId]: value }));
  };

  // Variants for slide animation
  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  if (schema.fields.length === 0) {
    return (
      <div className="text-center py-20 text-gray-300 italic text-xl">
        O formulário está vazio.
      </div>
    );
  }

  const currentField = schema.fields[currentStep];
  const isLastStep = currentStep === schema.fields.length - 1;
  const progress = ((currentStep + 1) / schema.fields.length) * 100;

  if (schema.welcomeScreen?.enabled && !hasStarted) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 flex flex-col items-center justify-center min-h-[400px] sm:min-h-[600px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8 w-full"
        >
          {schema.welcomeScreen.imageUrl && (
            <img 
              src={schema.welcomeScreen.imageUrl} 
              alt="Welcome" 
              className="w-full max-w-md mx-auto h-auto rounded-2xl object-cover mb-8"
              onError={(e) => {
                // Esconder imagem se a URL for inválida
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
          
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              {schema.welcomeScreen.title || schema.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed max-w-xl mx-auto">
              {schema.welcomeScreen.description || schema.description}
            </p>
          </div>

          <Button 
            onClick={() => setHasStarted(true)}
            size="lg" 
            className="rounded-full px-8 sm:px-12 py-6 text-xl shadow-2xl shadow-black/20 hover:shadow-black/30 transition-all bg-black text-white hover:bg-gray-800"
          >
            {schema.welcomeScreen.buttonText || 'Começar'} <ArrowRight size={24} className="ml-3" />
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-8 flex flex-col h-full min-h-[400px]">
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-1 mb-8 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-black"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>

      <div className="mb-8">
        {currentStep === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight leading-tight">{schema.title}</h1>
                {schema.description && (
                <p className="text-lg text-gray-500 leading-relaxed">{schema.description}</p>
                )}
            </motion.div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col relative">
        <AnimatePresence mode='wait' custom={direction}>
          <motion.div
            key={currentField.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="flex-1"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-none text-sm font-bold text-black mt-1.5 border border-black px-2 py-0.5 rounded">
                   {currentStep + 1} <ArrowRight size={10} className="inline ml-0.5" />
                </span>
                <div className="w-full">
                  <Label htmlFor={currentField.id} className="text-2xl sm:text-3xl font-medium text-gray-900 mb-6 block leading-tight">
                    {currentField.label}
                    {currentField.required && <span className="text-red-500 ml-1 text-lg align-top">*</span>}
                  </Label>
                  
                  {currentField.helpText && (
                    <p className="text-base text-gray-500 mb-6 -mt-4">{currentField.helpText}</p>
                  )}
                  
                  <div className="min-h-[120px]">
                  {currentField.type === 'text' && (
                    <Input
                      id={currentField.id}
                      placeholder={currentField.placeholder || "Digite sua resposta..."}
                      required={currentField.required}
                      disabled={preview}
                      autoFocus
                      className="text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-full"
                      value={answers[currentField.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      onKeyDown={(e) => {
                          if (e.key === 'Enter' && !isLastStep) {
                              e.preventDefault();
                              handleNext();
                          }
                      }}
                    />
                  )}

                  {currentField.type === 'email' && (
                    <Input
                      id={currentField.id}
                      type="email"
                      placeholder={currentField.placeholder || "exemplo@email.com"}
                      required={currentField.required}
                      disabled={preview}
                      autoFocus
                      className="text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-full"
                      value={answers[currentField.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isLastStep) {
                            e.preventDefault();
                            handleNext();
                        }
                    }}
                    />
                  )}

                  {currentField.type === 'number' && (
                    <Input
                      id={currentField.id}
                      type="number"
                      placeholder={currentField.placeholder}
                      required={currentField.required}
                      disabled={preview}
                      autoFocus
                      className="text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-full"
                      value={answers[currentField.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !isLastStep) {
                            e.preventDefault();
                            handleNext();
                        }
                    }}
                    />
                  )}

                  {currentField.type === 'date' && (
                    <Input
                      id={currentField.id}
                      type="date"
                      required={currentField.required}
                      disabled={preview}
                      autoFocus
                      className="text-2xl h-16 border-b-2 border-x-0 border-t-0 rounded-none bg-transparent px-0 focus:ring-0 border-gray-200 focus:border-black transition-all placeholder:text-gray-300 w-auto min-w-[200px]"
                      value={answers[currentField.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                    />
                  )}

                  {currentField.type === 'textarea' && (
                    <textarea
                      id={currentField.id}
                      className="flex min-h-[160px] w-full rounded-none border-b-2 border-x-0 border-t-0 border-gray-200 bg-transparent px-0 py-2 text-2xl placeholder:text-gray-300 focus:outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-50 resize-none font-sans"
                      placeholder={currentField.placeholder || "Digite sua resposta longa..."}
                      required={currentField.required}
                      disabled={preview}
                      autoFocus
                      value={answers[currentField.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                    />
                  )}

                  {currentField.type === 'select' && (
                    <select
                      id={currentField.id}
                      className="flex h-16 w-full rounded-none border-b-2 border-x-0 border-t-0 border-gray-200 bg-transparent px-0 py-2 text-2xl text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-black disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                      required={currentField.required}
                      disabled={preview}
                      autoFocus
                      value={answers[currentField.id] || ''}
                      onChange={(e) => handleAnswer(e.target.value)}
                    >
                      <option value="">Selecione uma opção...</option>
                      {currentField.options?.map((opt, idx) => (
                        <option key={idx} value={opt.value}>{String.fromCharCode(65 + idx)}. {opt.label}</option>
                      ))}
                    </select>
                  )}

                  {currentField.type === 'radio' && (
                    <div className="space-y-3 mt-4">
                      {currentField.options?.map((opt, idx) => (
                        <label key={idx} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group hover:bg-gray-50 ${answers[currentField.id] === opt.value ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-200'}`}>
                          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold mr-4 transition-colors ${answers[currentField.id] === opt.value ? 'bg-black text-white border-black' : 'border-gray-200 group-hover:border-gray-300'}`}>
                             {String.fromCharCode(65 + idx)}
                          </div>
                          <input
                            type="radio"
                            id={`${currentField.id}-${idx}`}
                            name={currentField.id}
                            value={opt.value}
                            className="hidden"
                            disabled={preview}
                            required={currentField.required}
                            checked={answers[currentField.id] === opt.value}
                            onChange={(e) => {
                                handleAnswer(e.target.value);
                                // Optional: Auto advance on radio selection
                                // setTimeout(handleNext, 400); 
                            }}
                          />
                          <span className="text-xl text-gray-800 font-medium">{opt.label}</span>
                          {answers[currentField.id] === opt.value && (
                            <div className="ml-auto text-black">
                               <Check size={24} />
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  )}

                  {currentField.type === 'checkbox' && (
                    <div className="space-y-3 mt-4">
                      {currentField.options?.map((opt, idx) => {
                          const currentAnswers = (answers[currentField.id] as string[]) || [];
                          const isChecked = currentAnswers.includes(opt.value);
                          
                          return (
                            <label key={idx} className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group hover:bg-gray-50 ${isChecked ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-200'}`}>
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-bold mr-4 transition-colors ${isChecked ? 'bg-black text-white border-black' : 'border-gray-200 group-hover:border-gray-300'}`}>
                                   {String.fromCharCode(65 + idx)}
                                </div>
                                <input
                                type="checkbox"
                                id={`${currentField.id}-${idx}`}
                                name={currentField.id}
                                value={opt.value}
                                className="hidden"
                                disabled={preview}
                                checked={isChecked}
                                onChange={(e) => {
                                    const val = e.target.value;
                                    const newAnswers = e.target.checked 
                                        ? [...currentAnswers, val]
                                        : currentAnswers.filter(v => v !== val);
                                    handleAnswer(newAnswers);
                                }}
                                />
                                <span className="text-xl text-gray-800 font-medium">{opt.label}</span>
                                {isChecked && (
                                    <div className="ml-auto text-black">
                                       <Check size={24} />
                                    </div>
                                )}
                            </label>
                        );
                      })}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="pt-8 flex justify-between items-center mt-auto border-t border-gray-100">
            {currentStep > 0 && (
                 <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={handlePrev}
                    className="text-gray-500 hover:text-black hover:bg-gray-100"
                >
                    <ChevronUp size={20} className="mr-2" /> Anterior
                </Button>
            )}
            
            {isLastStep ? (
                    <Button type="submit" disabled={isSubmitting} size="lg" className="ml-auto rounded-full px-8 text-lg shadow-xl shadow-black/20 hover:shadow-black/30 transition-all bg-black text-white hover:bg-gray-800">
                        {isSubmitting ? 'Enviando...' : 'Concluir'} <Check size={20} className="ml-2" />
                    </Button>
                  ) : (
                <Button 
                    type="button" 
                    size="lg" 
                    onClick={handleNext} 
                    className="ml-auto rounded-full px-8 text-lg shadow-xl shadow-black/20 hover:shadow-black/30 transition-all"
                >
                    Próximo <ChevronDown size={20} className="ml-2" />
                </Button>
            )}
        </div>
      </form>
    </div>
  );
}
