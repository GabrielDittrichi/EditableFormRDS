export interface FormResponse {
  id: string;
  timestamp: string;
  source?: string;
  answers: Record<string, any>;
}

export function saveResponse(response: Omit<FormResponse, 'id' | 'timestamp'>) {
  const responses = getResponses();
  const newResponse: FormResponse = {
    ...response,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString()
  };
  responses.push(newResponse);
  localStorage.setItem('form-responses', JSON.stringify(responses));
  return newResponse;
}

export function getResponses(): FormResponse[] {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem('form-responses');
  if (!saved) return [];
  try {
    return JSON.parse(saved);
  } catch (e) {
    return [];
  }
}
