"use client";

import { useFormBuilder } from '@/context/FormBuilderContext';
import { FormRenderer } from '@/components/renderer/FormRenderer';

export default function Home() {
  const { schema } = useFormBuilder();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <FormRenderer schema={schema} />
    </div>
  );
}
