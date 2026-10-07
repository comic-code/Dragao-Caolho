import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import SpellFilters from './index';
import { EMPTY_SPELL_FILTERS } from '../../../utils/spellUtils';

describe('SpellFilters', () => {
  test('uses select controls with catalog values for casting time, range, and duration', () => {
    const onChange = jest.fn();
    render(
      <SpellFilters
        filters={{ ...EMPTY_SPELL_FILTERS }}
        onChange={onChange}
        onClear={jest.fn()}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Filtros' }));

    const castingTime = screen.getByLabelText('Tempo de conjuração');
    const range = screen.getByLabelText('Alcance');
    const duration = screen.getByLabelText('Duração');

    expect(castingTime.tagName).toBe('SELECT');
    expect(range.tagName).toBe('SELECT');
    expect(duration.tagName).toBe('SELECT');
    expect(within(castingTime).getByRole('option', { name: '1 ação bônus' })).toBeInTheDocument();
    expect(within(range).getByRole('option', { name: '1 metro' })).toBeInTheDocument();
    expect(within(duration).getByRole('option', { name: '1 minuto' })).toBeInTheDocument();

    fireEvent.change(castingTime, { target: { value: '1 acao bonus' } });
    expect(onChange).toHaveBeenCalledWith('castingTime', '1 acao bonus');
  });
});
