import React, { useState, useContext } from "react";
import { GlobalContext } from "../../contexts/Global";
import { ItemsContainer, Table, TableRow, TableHeader, TableCell } from "./styles";

import Armors from './assets/armors';
import Weapons from './assets/weapons';
import { Grimoire } from "../Spells/styled";
import BackpackIcon from "../../assets/icons/backpack.png";

export default function Items() {
  const { savedItems, isFilteringSpells } = useContext(GlobalContext);

  // Agrupando as armas por tipo
  const groupedWeapons = Weapons.reduce((acc, weapon) => {
    if (!acc[weapon.type]) {
      acc[weapon.type] = [];
    }
    acc[weapon.type].push(weapon);
    return acc;
  }, {});

  return (
    <ItemsContainer>
      <h1>Armaduras</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Preço</TableHeader>
            <TableHeader>CA</TableHeader>
            <TableHeader>Furtividade</TableHeader>
            <TableHeader>Peso</TableHeader>
            <TableHeader>Tipo</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Armors.map((armor, index) => (
            <TableRow key={index}>
              <TableCell>{armor.label}</TableCell>
              <TableCell>{armor.price}</TableCell>
              <TableCell>{armor.armorClass}</TableCell>
              <TableCell>{armor.stealth || "N/A"}</TableCell>
              <TableCell>{armor.weight}</TableCell>
              <TableCell>{armor.type}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <h1>Armas</h1>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Nome</TableHeader>
            <TableHeader>Preço</TableHeader>
            <TableHeader>Dano</TableHeader>
            <TableHeader>Tipo</TableHeader>
            <TableHeader>Peso</TableHeader>
            <TableHeader>Propriedades</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {Object.keys(groupedWeapons).map((weaponType, index) => (
            <React.Fragment key={index}>
              {/* Linha indicando o tipo de arma */}
              <TableRow>
                <TableCell colSpan="6" style={{ textAlign: "center", fontWeight: "bold" }}>
                  {weaponType}
                </TableCell>
              </TableRow>
              {/* Listando as armas daquele tipo */}
              {groupedWeapons[weaponType].map((weapon, weaponIndex) => (
                <TableRow key={weaponIndex}>
                  <TableCell>{weapon.label}</TableCell>
                  <TableCell>{weapon.price}</TableCell>
                  <TableCell>{weapon.damage}</TableCell>
                  <TableCell>{weapon.type}</TableCell>
                  <TableCell>{weapon.weight}</TableCell>
                  <TableCell>{weapon.properties || "N/A"}</TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </Table>

      <Grimoire
        className="animationUp"
        src={BackpackIcon}
        onClick={() => alert("em construção :)")}
      />
    </ItemsContainer>
  );
}
