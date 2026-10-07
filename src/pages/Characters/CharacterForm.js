import { useState } from 'react';
import { SPELLCASTING_CLASSES } from '../../utils/characterUtils';
import { FormPanel } from './styles';

const initialForm = { name: '', className: SPELLCASTING_CLASSES[0], subclass: '', level: 1 };

export default function CharacterForm({ onCreate, onCancel }) {
  const [form, setForm] = useState(initialForm);

  function update(field, value) {
    setForm(current => ({ ...current, [field]: value }));
  }

  function submit(event) {
    event.preventDefault();
    if (!form.name.trim()) return;
    onCreate({ ...form, level: Number(form.level) });
    setForm(initialForm);
  }

  return (
    <FormPanel onSubmit={submit}>
      <h2>Novo personagem</h2>
      <label>
        Nome
        <input autoFocus required maxLength={50} value={form.name} onChange={event => update('name', event.target.value)} placeholder="Ex.: Aelthar" />
      </label>
      <div className="formRow">
        <label>
          Classe conjuradora
          <select value={form.className} onChange={event => update('className', event.target.value)}>
            {SPELLCASTING_CLASSES.map(className => <option key={className} value={className}>{className}</option>)}
          </select>
        </label>
        <label>
          Nível
          <input type="number" min="1" max="20" value={form.level} onChange={event => update('level', event.target.value)} />
        </label>
      </div>
      <label>
        Subclasse (opcional)
        <input maxLength={60} value={form.subclass} onChange={event => update('subclass', event.target.value)} placeholder="Ex.: Círculo da Terra (Floresta)" />
      </label>
      <div className="formActions">
        <button type="submit" className="primary">Criar personagem</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancelar</button>}
      </div>
    </FormPanel>
  );
}
