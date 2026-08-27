export type FormField = {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'radio' | 'checkbox';
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

export type FormDefinition = {
  id: string;
  title: string;
  description?: string;
  submitLabel?: string;
  fields: FormField[];
};

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  heroImage?: string;
  kind:
    | 'about'
    | 'beliefs'
    | 'leadership'
    | 'kids'
    | 'form'
    | 'calendar'
    | 'groups'
    | 'giving'
    | 'contact';
};
