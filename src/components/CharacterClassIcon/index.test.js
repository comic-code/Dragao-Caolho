import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import CharacterClassIcon from './index';
import { CHARACTER_CLASSES } from '../../utils/characterUtils';

describe('CharacterClassIcon', () => {
  test.each(CHARACTER_CLASSES)('shows the right icon for %s', className => {
    const { container } = render(<CharacterClassIcon characterClass={className} />);
    const wrapper = container.querySelector('[data-character-class]');
    const expectedClass = className.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    expect(wrapper).toHaveAttribute('data-character-class', expectedClass);
    expect(wrapper.querySelector('img')).toBeInTheDocument();
  });
});
