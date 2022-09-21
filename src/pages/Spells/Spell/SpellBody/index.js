import React from 'react';
import SpellTable from '../SpellTable';
import { SpellBodyWrapper } from './styles';

export default function SpellBody({ spellBody }) {
  return (
    <SpellBodyWrapper>
      {spellBody.description.map((element, index) => {
        if (element.type === 'default') return <p key={index}>{element.description}</p>;
        if (element.type === 'list')
          return (
            <ul key={index}>
              {element.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          );

        if (element.type === 'table') return <SpellTable key={index} table={element} />;
        if (element.type === 'option')
          return (
            <p key={index}>
              <span className="bold">{element.value}</span>
              {element.description.replace(element.value, '')}
            </p>
          );
        return(<></>)
      })}
      {spellBody.higherLevels && (
        <p>
          <span className="bold">Em níveis superiores: </span>
          {spellBody.higherLevels.replace('Em Níveis Superiores.', '')}
        </p>
      )}
    </SpellBodyWrapper>
  );
}
