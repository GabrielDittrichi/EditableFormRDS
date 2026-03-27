export type FieldType = 'text' | 'textarea' | 'number' | 'email' | 'select' | 'radio' | 'checkbox' | 'date';

export interface FieldOption {
  label: string;
  value: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  helpText?: string;
  required: boolean;
  options?: FieldOption[]; // For select, radio, checkbox
}

export interface WelcomeScreen {
  enabled: boolean;
  title?: string;
  description?: string;
  imageUrl?: string;
  buttonText?: string;
}

export interface EmailConfig {
  enabled: boolean;
  subject?: string;
  body?: string;
  emailFieldId?: string; // The ID of the field that contains the user's email
}

export interface FormSchema {
  id: string;
  title: string;
  description?: string;
  redirectUrl?: string;
  welcomeScreen?: WelcomeScreen;
  emailConfig?: EmailConfig;
  fields: FormField[];
}
