"use client";

import { FormBuilderProvider } from "@/context/FormBuilderContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FormBuilderProvider>
      {children}
    </FormBuilderProvider>
  );
}
