'use client';

import { FormEvent, useState } from 'react';
import { church } from '@/content/site';
import type { FormDefinition } from '@/lib/types';

export function ManagedForm({ form }: { form: FormDefinition }) {
  const [status, setStatus] = useState('');

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const lines: string[] = [];
    for (const field of form.fields) {
      const values = data.getAll(field.name).filter(Boolean).join(', ');
      if (values) lines.push(`${field.label}: ${values}`);
    }
    const subject = encodeURIComponent(`Point ATX website: ${form.title}`);
    const body = encodeURIComponent(lines.join('\n'));
    setStatus('Your email app is opening with this request ready to send.');
    window.location.href = `mailto:${church.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="form-panel" id={form.id}>
      <div className="form-heading">
        <p className="eyebrow">Get connected</p>
        <h2>{form.title}</h2>
        {form.description ? <p>{form.description}</p> : null}
      </div>
      <form onSubmit={submit} className="managed-form">
        {form.fields.map((field) => (
          <div className={`field field--${field.type ?? 'text'}`} key={field.name}>
            <label>{field.label}{field.required ? <span aria-hidden="true"> *</span> : null}</label>
            {field.type === 'textarea' ? (
              <textarea name={field.name} required={field.required} placeholder={field.placeholder} rows={5} />
            ) : field.type === 'select' ? (
              <select name={field.name} required={field.required} defaultValue="">
                <option value="" disabled>Select one</option>
                {field.options?.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : field.type === 'radio' || field.type === 'checkbox' ? (
              <div className="choice-list">
                {field.options?.map((option) => (
                  <label className="choice" key={option}>
                    <input type={field.type} name={field.name} value={option} required={field.required && field.type === 'radio'} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            ) : (
              <input type={field.type ?? 'text'} name={field.name} required={field.required} placeholder={field.placeholder} />
            )}
          </div>
        ))}
        <button className="button button--dark" type="submit">{form.submitLabel ?? 'Send'}</button>
        <p className="form-note">Submitting opens your email app so you can review the message before sending it directly to Point ATX.</p>
        <p className="form-status" role="status">{status}</p>
      </form>
    </section>
  );
}
